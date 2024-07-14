$linuxUser = "username"                         # Replace with Linux username
$linuxHost = "linuxhostname"                    # Replace with Linux hostname or IP address
$sshKeyPath = "C:\path\to\private_key.ppk"      # Replace with path to private key file (.ppk)

$plinkCommand = "& 'C:\path\to\plink.exe' -ssh -i $sshKeyPath $linuxUser@$linuxHost 'date'"

$dateTime = Invoke-Expression -Command $plinkCommand

Write-Host "Date and time on $linuxHost: $dateTime"
