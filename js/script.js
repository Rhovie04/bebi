document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('card');
    const jsConfetti = new JSConfetti();

    card.addEventListener('click', () => {
        card.classList.toggle('open');
        if (card.classList.contains('open')) {
            jsConfetti.addConfetti();
            setTimeout(() => {
                showLoveMessage();
            }, 2000);
        }
    });
});

function showLoveMessage() {
    const card = document.getElementById('card');
    card.innerHTML = `
        <h1>I Love You!</h1>
        <p>Happy Birthday Bebi/Mommy 😘 tanda mo na hahaha jk enjoy ur day po kahit na pagod na pagod kana dyan sainyo hayaan mo nalang yun sila makakaalis kadin sa ganyang sitwasyon okiee. Iloveyouu so much 🫶 
        
        Mahal na mahal kita bebi salamat dahil dumating ka sa buhay ko binigyan mo ulit ng kulay ang mundo ko haha tbh last ka na po talaga eh alam un ng mga may kilala sakin at alam mo din naman bakit nasabi ko na din naman. salamat po sa pag stay kahit na ang kulit ko minsan hahaha sorry po kapag nag ooverthink ako minsan nagiging iba na agad mood ko bawi ako pag punta ko bebi promise.
        
        Sorry po wala ako dyan ngayon birthday mo pa naman, babawi talaga ako pag punta ko dyan sulitin natin ang mga araw na magkasama tayo 😘 d lang kiss at yakap 👀 jk mommy hahahaha
        
        5 Months na tayo oh ang bilis ng panahon hahaha wala nga lang official date desisyon ka eh d pa nga nagtatanong ung tao kung pwedi manligaw eh ginawa mo agad akong jowa hahahaha d naman sa nagrereklamo pero thankyouuu! I love youuu ❤️
        
        So ayon lang bawi po talaga ako pag punta ko dyan bebi promise po. Happy Birthday! I Love You So Much!❤️
        
        wag mo ko iwan hah 😤 subukan mo lang susumbong kita jk hahaha
        
        </p>
        <button onclick="redirectToFlower()">For You!</button>
    `;
}

function redirectToFlower() {
    window.location.href = 'flower.html';
}
