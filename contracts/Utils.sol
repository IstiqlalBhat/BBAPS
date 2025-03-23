library Utils {
    function parseDate(string memory date) internal pure returns (uint) {
        bytes memory b = bytes(date);
        uint year = (uint(uint8(b[0])) - 48) * 1000 + (uint(uint8(b[1])) - 48) * 100 + (uint(uint8(b[2])) - 48) * 10 + (uint(uint8(b[3])) - 48);
        uint month = (uint(uint8(b[5])) - 48) * 10 + (uint(uint8(b[6])) - 48);
        uint day = (uint(uint8(b[8])) - 48) * 10 + (uint(uint8(b[9])) - 48);
        return year * 10000 + month * 100 + day;
    }

    function checkScheduleOverlap(string memory gcStart, string memory gcEnd, string memory subStart, string memory subEnd) internal pure returns (bool) {
        uint gcStartInt = parseDate(gcStart);
        uint gcEndInt = parseDate(gcEnd);
        uint subStartInt = parseDate(subStart);
        uint subEndInt = parseDate(subEnd);

        return (subStartInt <= gcStartInt && subEndInt>= gcEndInt);
    }
       function testCheckScheduleOverlap(
        string memory gcStart, 
        string memory gcEnd, 
        string memory subStart, 
        string memory subEnd
    ) public pure returns (bool) {
        return checkScheduleOverlap(gcStart, gcEnd, subStart, subEnd);
    }
}
