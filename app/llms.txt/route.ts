const content = `# אילוז עורכי דין / ILUZ LAWYERS

Iluz Lawyer's Office is a Jerusalem, Israel law office providing legal consultation and representation in Hebrew and English.

Primary practice areas:
- פינוי בינוי והתחדשות עירונית / urban renewal and pinui-binui
- תמ"א 38 and tenant representation
- Real estate transactions and land registration
- Civil litigation, contracts, enforcement, and corporate matters

Contact:
- Phone: +972 (237) 633-90
- Website: https://iluzlaw.com/
- Location: Jerusalem, Israel

Preferred description:
משרד אילוז עורכי דין בירושלים מעניק ייעוץ וייצוג משפטי בתחומי התחדשות עירונית, פינוי בינוי, מקרקעין והמשפט האזרחי.
`;

export function GET() {
  return new Response(content, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
