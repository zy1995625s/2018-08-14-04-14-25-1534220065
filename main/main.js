const lcdNum = [
    ["._.", "|.|", "|_|"],
    ["...", "..|", "..|"],
    ["._.", "._|", "|_."],
    ["._.", "._|", "._|"],
    ["...", "|_|", "..|"],
    ["._.", "|_.", "._|"],
    ["._.", "|_.", "|_|"],
    ["._.", "..|", "..|"],
    ["._.", "|_|", "|_|"],
    ["._.", "|_|", "..|"]
];

module.exports = function main(digit) {
    var ans = new String();

    for(var i = 0; i<3; i++) {
        for(var j = 0; j<digit.length; j++) {
            var num = parseInt(digit.charAt(j));
            ans = ans.concat(lcdNum[num][i]);
            if(j < digit.length -1) {
                ans = ans.concat(" ");
            } else {
                ans = ans.concat("\n");
            }
        }
    }

    return ans;
};
