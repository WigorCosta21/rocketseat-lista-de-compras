const form = document.querySelector("form")
const task = document.querySelector("#task")
const btnAdd = document.querySelector(".btn-add")
const inputChecked = document.querySelector("#check-task")
const list = document.querySelector(".list")

form.onsubmit = (event) => {
    event.preventDefault()
}

const addTask = () => {
    try {

        const item = task.value.trim()

        if (item === "") {
            alert("O campo não pode ser vazio")

            return
        }

        const newListContent = document.createElement("li")
        newListContent.classList.add("list-content")
        list.appendChild(newListContent)

        const newCheckboxWrapper = document.createElement("div")
        newCheckboxWrapper.classList.add("checkbox-wrapper")
        newListContent.appendChild(newCheckboxWrapper)

        const newCheckboxImage = document.createElement("div")
        newCheckboxImage.classList.add("checkbox-image")
        newCheckboxWrapper.appendChild(newCheckboxImage)


        const newCheckTask = document.createElement("input")
        newCheckTask.setAttribute("type", "checkbox")
        newCheckboxWrapper.appendChild(newCheckTask)


        const newSpan = document.createElement("span")
        newSpan.textContent = item
        newCheckboxWrapper.appendChild(newSpan)

        const newBtnDelete = document.createElement("button")
        newBtnDelete.classList.add("btn-delete")
        newBtnDelete.setAttribute("type", "submit")
        newListContent.appendChild(newBtnDelete)

        const newImg = document.createElement("img")
        newImg.src = "../assets/icons/trash.svg"
        newBtnDelete.appendChild(newImg)


    } catch (error) {
        console.log(error)
    }
}

btnAdd.addEventListener("click", () => {
    addTask()
})