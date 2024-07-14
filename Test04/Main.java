class Main{
    public static void main(String[] args) {
        String isoMessage = "600096000008002020010000C0000501000000004900968501B5504A14CF07";

        System.out.println();
        System.out.println("ISO 8583 Message : " + isoMessage);
        System.out.println("==================================================================================");
        System.out.println("TPDU \t\t\t\t\t: " + isoMessage.substring(0, 10));
        System.out.println("Message Type Indicator \t\t\t: " + isoMessage.substring(10, 14));
        System.out.println("Primary Bit Map \t\t\t: " + isoMessage.substring(14, 30));
        System.out.println("DE3) Processing Code \t\t\t: " + isoMessage.substring(30, 36));
        System.out.println("DE11) Systems Trace Audit Number \t: " + isoMessage.substring(36, 42));
        System.out.println("DE24) Network International Id \t\t: " + isoMessage.substring(42, 46));
        System.out.println("DE64) Message Authentication Code \t: " + isoMessage.substring(46, 62));
        System.out.println();
    }
}