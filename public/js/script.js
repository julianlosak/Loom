

  $(document).ready(() => {
    $('.passage').each(function() {
        let text = $(this).attr('data-type-text')
        console.log(text)
        let element = $(this)
        let i = 0;
        let timer = setInterval(() => {
            
            if (i < text.length) {

                setTimeout(() => {
                    element.append(text.charAt(i))
                    i++
                }, Math.floor(Math.random() * 70) + 20);
            } else {
                clearInterval(timer)
                element.text(text)
                $('.choice').removeClass('hidden')
            }
        }, 50);
        $(document).on('click', () => {
            clearInterval(timer)
            element.text(text)
            $('.choice').removeClass('hidden')
        })
    });    
  })


const handleNewChoice = async () => {
    let choiceText = $('#choice_text').val();
    let requiredItem = $('#required_item').val()
    let nextBranchTitle = $('#next_branch_title').val()
    let nextBranchContent = $('#next_branch_content').val()
    let receivedItem = $('#received_item').val()
    let removeItem = $('#remove_item').val() === 'on' ? true : false
    let endHere = $('#end_here').is('checked')

    await fetch(`/branch/`, {
        method: "POST",
        body: JSON.stringify({
            branchData : {
                branch_title : nextBranchTitle,
                branch_content : nextBranchContent,
                received_item : receivedItem ? receivedItem : null,
                removed_item : removeItem ? requiredItem : null,
                end_here : endHere
            },
            choiceData : {
                choice_text : choiceText,
                required_item : requiredItem ? requiredItem : null
            }
        }),
        headers: {
            "Content-Type": "application/json"
        }
        })
        .then((_res) => {
            location.reload()
        })
        .catch((err) => {
            console.log(err)
        })
}

const handleNewStory = async () => {
    let branchTitle = $('#branch_title').val();
    let branchContent = $('#branch_content').val()
    let receivedItem = $('#received_item').val()
    let storyTitle = $('#story_title').val()
    let storyContent = $('#story_content').val()


    await fetch(`/story/`, {
        method: "POST",
        body: JSON.stringify({
            branchData : {
                branch_title : branchTitle,
                branch_content : branchContent,
                received_item : receivedItem ? receivedItem : null,
                end_here : false,
                start_here : true   
            },
            storyData : {
                story_title : storyTitle,
                story_content : storyContent
            }
        }),
        headers: {
            "Content-Type": "application/json"
        }
        })
        .then((_res) => {
            location.reload()
        })
        .catch((err) => {
            console.log(err)
        })
}



const handleSignup = async () => {
    let authorName = $("#signupAuthorName").val();
    let email = $("#signupEmail").val();
    let password = $("#signupPassword").val();
    await fetch(`/user/`, {
        method: "POST",
        body: JSON.stringify({
            author_name: authorName,
            email: email,
            password: password
        }),
        headers: {
            "Content-Type": "application/json"
        }
        })
        .then((_res) => {
            location.reload()
        })
        .catch((err) => {
            console.log(err)
        })
}

const newChoiceDialog = (inventoryItems) => {
    if (inventoryItems.length > 0) {
        inventoryOptions = inventoryItems.map((item) => {
        return `<option value="${item}">${item}</option>`
    })
        inventoryItems = `
        optional required item: \
        <select \
            class="form-control" \
            name="required_item" \
            id="required_item" \
            placeholder="required item" \
            autocomplete="off" \
            > \
        <option value="null">none</option> \
        ${inventoryOptions} \
        </select> \
        <input type="checkbox" name="remove_item" id="remove_item" />
        <label for "remove_item">remove/destroy item?</label>
        `
    }
    let newChoiceDialog = $(`
    <div class="modal fade" id="newChoiceDialog" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">

                    <input type="text" class="form-control" name="choice_text" id="choice_text" placeholder="choice text" required autocomplete="off"/>
                    
                    ${inventoryItems ? inventoryItems : null}
                    
                    <input type="text" class="form-control" name="next_branch_title" id="next_branch_title" placeholder="next branch title" required autocomplete="off"/>
                    <textarea class="form-control" name="next_branch_content" id="next_branch_content" placeholder="next branch content" rows="5" required autocomplete="off"/></textarea>
                    <input type="text" class="form-control" name="received_item" id="received_item" placeholder="optional received item" autocomplete="off"/>
                    <input type="checkbox" name="end_here" id="end_here" />
                    <label for="end_here">Game over?</label>


                <div class="modal-footer">
                    <button type="button" 
                        class="btn btn-secondary cancelButton" 
                        data-bs-dismiss="modal"
                    >Cancel</button>
                    <button 
                        type="button" 
                        class="btn btn-primary confirmButton"
                    >Create Branch!</button>
                </div>
            </div>
        </div>
    </div>
    `)

    newChoiceDialog.find(".confirmButton").on("click", function () {
        handleNewChoice()
        newChoiceDialog.modal("hide");
    })

    newChoiceDialog.modal("show");
}

const newStoryDialog = (inventoryItems) => {
    let newStoryDialog = $(`
    <div class="modal fade" id="newStoryDialog" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">

                    <input type="text" class="form-control" name="story_title" id="story_title" placeholder="Story title" required autocomplete="off"/>
                    <input type="text" class="form-control" name="story_content" id="story_content" placeholder="Story preface" required autocomplete="off"/>
                    
                    
                    
                    <input type="text" class="form-control" name="branch_title" id="branch_title" placeholder="Starting Branch Title" required autocomplete="off"/>
                    <textarea class="form-control" name="branch_content" id="branch_content" placeholder="Starting branch content" rows="5" required autocomplete="off"/></textarea>
                    <input type="text" class="form-control" name="received_item" id="received_item" placeholder="optional received item" autocomplete="off"/>
                    


                <div class="modal-footer">
                    <button type="button" 
                        class="btn btn-secondary cancelButton" 
                        data-bs-dismiss="modal"
                    >Cancel</button>
                    <button 
                        type="button" 
                        class="btn btn-primary confirmButton"
                    >Create Branch!</button>
                </div>
            </div>
        </div>
    </div>
    `)

    newStoryDialog.find(".confirmButton").on("click", function () {
        handleNewStory()
        newStoryDialog.modal("hide");
    })

    newStoryDialog.modal("show");
}



const signupDialog = () => {
    let signupDialog = $(`
    <div class="modal fade" id="editPostDialog" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog crt">
            <div class="modal-content">
                <div class="modal-body">
                <input type="text" class="form-control" id="signupAuthorName" placeholder="author name" autocomplete="off">
                <input type="text" class="form-control" id="signupEmail" placeholder="email" autocomplete="off">
                <input type="password" class="form-control" id="signupPassword" placeholder="password" autocomplete="off">
                <div class="modal-footer">
                    <button type="button" 
                        class="btn btn-secondary cancelButton" 
                        data-bs-dismiss="modal"
                    >Cancel</button>
                    <button 
                        type="button" 
                        class="btn btn-primary confirmButton"
                    >Sign up!</button>
                </div>
            </div>
        </div>
    </div>
    `)

    signupDialog.find(".confirmButton").on("click", function () {
        handleSignup()
        signupDialog.modal("hide");
    })

    signupDialog.modal("show");
}

$('#newChoiceButton').on('click', () => {
    let inventoryItems = $('.inventoryItem').map(function() {
        return $(this).val();
    }).get();
    console.log(inventoryItems)
    newChoiceDialog(inventoryItems ? inventoryItems : null)
})

$('#signupButton').on('click', () => {
    console.log('signup')
    signupDialog()
})

$('#newStoryButton').on('click', () => {
    newStoryDialog()
})