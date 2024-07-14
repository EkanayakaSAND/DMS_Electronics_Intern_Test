$linuxUser = "username"                 # Replace with Linux username
$linuxHost = "linuxhostname"            # Replace with Linux hostname or IP address
$sshKeyPath = "C:\path\to\private_key"  # Replace with path to private key file

$sshCommand = "ssh -i ""$sshKeyPath"" $linuxUser@$linuxHost 'date'"

$dateTime = Invoke-Expression -Command $sshCommand

Write-Host "Date and time on $linuxHost: $dateTime"
