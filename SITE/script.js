let i = 0
//essa é a parte que vai mudar a imagem d html d flowey 1 , eu não sabia muito bem como fazer ent fiz como achava q era
function mudaImagem(nova) {
    const flowey = document.getElementById('imagem-falando');
    flowey.src = nova

} setInterval(() => {
    mudaImagem('IMAGENS/floweyp.png')
}, 15500); // esses segundos aq é só um teste 

function mudas(nvs) {
    const flowey = document.getElementById('piscadinha');
    flowey.src = nvs
}

setInterval(() => {
    document.getElementById("fala").innerHTML = ""
}, 4500);

setTimeout(() => {
    mudas('IMAGENS/Flowey_battle_winking.webp');

    setTimeout(() => {
        mudas('IMAGENS/Flowey_battle_talk1.gif');

        setTimeout(() => {
            mudas('IMAGENS/floweyp.png')
            
            setTimeout(() => {
                mudas('IMAGENS/Flowey_battle_talk1.gif');

                setTimeout(() => {
                    mudas('IMAGENS/floweyp.png');

                    setTimeout(() => {
                        mudas('IMAGENS/Flowey_battle_talk1.gif');

                        setTimeout(() => {
                            setInterval(() => {
                                mudas('IMAGENS/Flowey_battle_laugh.webp');
                            }, 500);
                        }, 3000)
                    }, 1500)
                }, 1900)
            }, 1500)
        }, 1900);
    }, 2500);
}, 2500);

//  PARTE DE TROCAR DE TEXTO 

const lines2 = document.querySelectorAll(".linha-dialogo2");
const typingSpeed2 = 80;

let lineIndex2 = 0;
let charIndex2 = 0;

function typeWriter2() {
    if (lineIndex >= lines2.length) {
        // Todas as linhas foram digitadas, você pode adicionar uma ação final aqui
        return;
    }

    const currentLineElement = lines2[lineIndex2];
    // Certifique-se de que o elemento está visível antes de digitar
    currentLineElement.style.display = 'block'; // Torna o elemento visível

    const originalHTML = currentLineElement.getAttribute('data-original-html');

    if (charIndex2 < originalHTML.length) {
        // Lógica para lidar com tags HTML (como <span> ou   ) dentro do texto
        if (originalHTML[charIndex2] === '<') {
            const tagEndIndex = originalHTML.indexOf('>', charIndex2);
            currentLineElement.innerHTML = originalHTML.substring(0, tagEndIndex + 1);
            charIndex2 = tagEndIndex;
        } else {
            currentLineElement.innerHTML = originalHTML.substring(0, charIndex2 + 1);
        }
        charIndex2++;
        let delay = typingSpeed2;
        // Verifica se o caractere anterior (que acabou de ser digitado) é um ponto final ou se os três caracteres anteriores formam uma reticência
        if (originalHTML[charIndex2 - 1] === ".") {
            delay = 700; // Atraso maior para ponto final
        } else if (originalHTML.substring(charIndex2 - 3, charIndex2) === "...") {
            delay = 800; // Atraso maior para reticências
        }
        setTimeout(typeWriter2, delay);
    } else {
        // Linha atual completa, avança para a próxima após um pequeno atraso
        lineIndex2++;
        charIndex2 = 0;
        setTimeout(() => {
            if (lineIndex2 < lines2.length) {
                // Oculta a linha anterior antes de começar a digitar a próxima, se desejar
                // lines[lineIndex - 1].style.display = 'none'; 
                typeWriter2(); // Inicia a digitação da próxima linha
            }
        }, 1500); // Atraso entre as linhas (1.5 segundos)
    }
}

// Prepara as linhas para a função typeWriter
document.addEventListener('DOMContentLoaded', () => {
    lines2.forEach(line => {
        line.setAttribute('data-original-html', line.innerHTML);
        line.innerHTML = ''; // Limpa o conteúdo para a typeWriter começar a digitar
        line.style.display = 'none'; // Oculta todas as linhas inicialmente
    });
    // Inicia a digitação da primeira linha
    if (lines2.length > 0) {
        lines2[0].style.display = 'block'; // Torna a primeira linha visível para começar a digitar
        typeWriter2();
    }
});
//esse é o 2
   const lines = document.querySelectorAll(".linha-dialogo");
            const typingSpeed = 50;

            let lineIndex = 0;
            let charIndex = 0;

            function typeWriter() {
                if (lineIndex >= lines.length) {
                    return; 
                }

                const currentLine = lines[lineIndex];
                const originalHTML = currentLine.getAttribute('data-original-html');

                currentLine.style.visibility = 'visible';

                if (charIndex < originalHTML.length) {
                    if (originalHTML[charIndex] === '<') {
                        const tagEndIndex = originalHTML.indexOf('>', charIndex);
                        currentLine.innerHTML = originalHTML.substring(0, tagEndIndex + 1);
                        charIndex = tagEndIndex;
                    } else {
                        currentLine.innerHTML = originalHTML.substring(0, charIndex + 1);
                    }
                    charIndex++;
                    setTimeout(typeWriter, typingSpeed);
                } else {
                    lineIndex++;
                    charIndex = 0;
                    setTimeout(typeWriter, 500); 
                }
            }
            
            lines.forEach(line => {
                line.setAttribute('data-original-html', line.innerHTML);
                line.innerHTML = '';
            });
            
            typeWriter();

//erm 
document.addEventListener('DOMContentLoaded', () => {
    const perguntaElement = document.querySelector('.pisca');
    setTimeout(() => {
        perguntaElement.classList.add('dps');
    }, 18000);
});
document.addEventListener('DOMContentLoaded',()=>{
    const perguntaElement = document.querySelector('.continuar');
    setTimeout(()=>{
        perguntaElement.classList.add('visivel2');
    },17000)

});

document.addEventListener('DOMContentLoaded', () => {
    const perguntaElement = document.querySelector('.pergunta');
    setTimeout(() => {
        perguntaElement.classList.add('visivel');
    }, 15500);
});


document.addEventListener('DOMContentLoaded', () => {
    const perguntaElement = document.querySelector('.k');
    setTimeout(() => {
        perguntaElement.classList.add('dps2');
    }, 16000);
});