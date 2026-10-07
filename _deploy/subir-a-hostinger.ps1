# Sube el sitio construido (_site) a Hostinger por FTPS.
# Uso: clic derecho > "Ejecutar con PowerShell". Te pedira la contrasena (no se guarda).
# Antes de correrlo: haz una copia de seguridad de public_html desde hPanel.

$ftpHost = "ftp.constructoraurbania.com"
$ftpUser = "u674956329.juan"
$remoteDir = "public_html"
$origen = Join-Path (Split-Path $PSScriptRoot -Parent) "_site"
$excluir = @("api", ".htaccess")   # son del servidor, no se tocan

if (-not (Test-Path $origen)) { Write-Host "No existe $origen. Corre 'bundle exec jekyll build' primero."; exit 1 }

$sec = Read-Host "Contrasena FTP de $ftpUser" -AsSecureString
$pass = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($sec))
$cred = "${ftpUser}:$pass"

# Prueba de conexion
$null = & curl.exe -s --ssl-reqd --ftp-ssl-control -k --max-time 20 --list-only "ftp://$ftpHost/$remoteDir/" --user $cred
if ($LASTEXITCODE -ne 0) { Write-Host "No se pudo conectar (codigo $LASTEXITCODE). Revisa usuario/contrasena."; exit 1 }
Write-Host "Conexion OK. Subiendo..."

$archivos = Get-ChildItem $origen -Recurse -File | Where-Object {
  $rel = $_.FullName.Substring($origen.Length + 1).Replace("\","/")
  $top = $rel.Split("/")[0]
  -not ($excluir -contains $top)
}
$total = $archivos.Count; $i = 0; $fallos = 0
foreach ($f in $archivos) {
  $i++
  $rel = $f.FullName.Substring($origen.Length + 1).Replace("\","/")
  & curl.exe -s --ssl-reqd --ftp-create-dirs -k --max-time 120 -T $f.FullName "ftp://$ftpHost/$remoteDir/$rel" --user $cred
  if ($LASTEXITCODE -ne 0) { $fallos++; Write-Host "FALLO: $rel" } elseif ($i % 10 -eq 0) { Write-Host "$i / $total" }
}
Write-Host "Listo. $($total - $fallos) archivos subidos, $fallos fallos."
Write-Host "Prueba: https://constructoraurbania.com  (Ctrl+F5). Luego cambia la contrasena FTP."
$pass = $null
