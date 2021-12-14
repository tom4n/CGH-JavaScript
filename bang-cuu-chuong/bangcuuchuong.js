document.write("<table border=1 cellspacing=0>")
for (a=1; a<=10; a++) {
    document.write("<tr>");
    for (b=2; b<=9; b++) {
        document.write("<td>" + b + "x" + a + "=" + (b*a)+"</td>");
    }
    document.write("</tr>")
}
document.write("</table>")