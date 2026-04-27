<?php
$client_id = 'Ov23li1JqVAcBgxugZwa';
$client_secret = '5d5a519d33806b88f91e4adff38bc547e3c62baa';

if (isset($_GET['code'])) {
    $code = $_GET['code'];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://github.com/login/oauth/access_token');
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
        'client_id' => $client_id,
        'client_secret' => $client_secret,
        'code' => $code
    ]));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Accept: application/json']);

    $response = curl_exec($ch);
    curl_close($ch);

    $data = json_decode($response, true);

    if (isset($data['access_token'])) {
        $token = $data['access_token'];
        $message = 'authorization:github:success:' . json_encode([
            'token' => $token,
            'provider' => 'github'
        ]);
    } else {
        $message = 'authorization:github:error:' . json_encode([
            'message' => 'Failed to get token'
        ]);
    }

    echo "<!DOCTYPE html>
<html>
<head><title>Authenticating...</title></head>
<body>
<script>
(function() {
    var message = " . json_encode($message) . ";
    if (window.opener) {
        window.opener.postMessage(message, '*');
        window.close();
    } else {
        document.body.innerHTML = '<p>Authentication complete. You can close this window.</p>';
    }
})();
</script>
</body>
</html>";
} else {
    $redirect = 'https://constructoraurbania.com/api/auth';
    header('Location: https://github.com/login/oauth/authorize?client_id=' . $client_id . '&scope=repo,user&redirect_uri=' . urlencode($redirect));
    exit;
}
?>
