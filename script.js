let changeIndex = 0;
        const n = 4; // Number of loops
        let blow = new Audio('party-blower.mp3');

        const texts = ["Выбери завтрак пока солнце не вышло.", "Что наденешь?", "Выйдя на улицу ты встретила котика. Какого?", "Посылка? Что же внутри?\n (нажми два раза)", "Это...\nНажми чтобы открыть", "Подарок!!!\nНажми на него"];
        const images = [
            ["IMG_4243.JPG", "IMG_4245.JPG", "IMG_4246.JPG", "IMG_4253.JPG"],
            ["IMG_4251.JPG", "IMG_4248.JPG", "IMG_4249.JPG", "IMG_4250.JPG"],
            ["IMG_4252.JPG", "IMG_4254.JPG", "IMG_4255.JPG", "IMG_4257.JPG"],
            ["IMG_4258.JPG", "IMG_4259.JPG", "IMG_4259.JPG", "IMG_4259.JPG"]
        ];

        function revealContent() {
            document.getElementById("initial-text").classList.add("hidden");
            document.getElementById("content").classList.remove("hidden").add('question');
            document.body.onclick = null; // Disable further background clicks
        }

        function changeContent() {            
            if (changeIndex < n) {
                document.getElementById("changing-text").classList.add("question");
                document.getElementById("changing-text").innerText = texts[changeIndex];

                let imgs = document.querySelectorAll(".image-container img");
                imgs.forEach((img, i) => {
                    img.src = images[changeIndex][i];
                });
                changeIndex++;
                
            }
        }
        function changeText(){
            if((changeIndex == n)){
                document.getElementById("changing-text").classList.add("button");
                document.getElementById("changing-text").innerText = texts[changeIndex];
                //document.getElementById('changing-text').style.color = 'red'
                document.getElementById("images1").classList.add("hidden");
                document.getElementById("images2").classList.add("hidden");
                document.getElementById("images3").classList.add("hidden");
                document.getElementById("images4").classList.add("hidden");
                changeIndex++
                //document..onclick = null; // Disable further background clicks

            }
        }

        function revealGift(){
            if(changeIndex > n){
                blow.play();
            document.getElementById("changing-text").classList.remove("button");
            document.getElementById("changing-text").innerText = texts[changeIndex];
            document.getElementById("certificate").classList.remove("hidden").add('button');
            //document.getElementById("giftImage").classList.remove("hidden");
            }
        }

        function congratulation(){
            document.getElementById("happyB").classList.remove("hidden").add('question');

        }

  