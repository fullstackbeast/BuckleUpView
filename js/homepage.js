const texts = ["Better", "Fun", "Proper", "Simple"];

let index = 0;
let isWriting = false;

const changingTextSpan = document.querySelector("#cta-changing");


const removeText = () => {

}

const writeText = (currentIndex) => {

    let currentTextInTexts = texts[currentIndex]

    console.log(changingTextSpan.textContent);

    // isWriting = currentTextInTexts == changingTextSpan.textContent;
    if (currentTextInTexts == changingTextSpan.textContent) {
        console.log("finished writing");
        isWriting = false;
    }

    changingTextSpan.textContent = currentTextInTexts;
    //.substring(0, currentTextInTexts.indexOf(changingTextSpan.textContent) + 1);

    // currentTextInTexts.indexOf(changingTextSpan.textContent)
}



const changeCtaText = () => {

    setInterval(() => {
        let currentText = changingTextSpan.textContent;

        if (isWriting) {
            index == (texts.length-1) ? index = 0 : index++;
            console.log(index);
            writeText(index);
        } else {
            let newText = currentText.substring(0, currentText.length - 1);
            changingTextSpan.innerHTML = newText;

            isWriting = newText.length == 0;
        }

    }, 500)


}




window.addEventListener("load", () => {
    index = 0;
    changeCtaText();
})