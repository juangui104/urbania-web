<?php
$client_id = 'Ov23li1JqVAcBgxugZwa';
$client_secret = 'TU_CLIENT_SECRET_AQUI';

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
    $token = $data['access_token'];

    echo "<script>
        (function() {
            window.opener.postMessage(
                'authorization:github:success:{\"token\":\"" . $token . "\",\"provider\":\"github\"}',
                '*'
            );
        })()
    </script>";
} else {
    $redirect = urlencode('https://constructoraurbania.com/api/auth');
    header('Location: https://github.com/login/oauth/authorize?client_id=' . $client_id . '&scope=repo,user&redirect_uri=' . $redirect);
}
?>
