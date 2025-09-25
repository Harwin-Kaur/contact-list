const apiEP = "https://randomuser.me/api?results=5";

let userList = [];

// slide to go to app screen    

const slider = document.getElementById("mySlider");

slider.addEventListener("change", (e) => {
    // console.log(e.target.value);

    const {value} = e.target;
    const label = document.getElementById("label");
    if(value > 70){
        label.textContent = "";
        displayAppScreen();
    }else{
        label.textContent = "Slide to Unlock";
    }
});             

const displayAppScreen = ()=>{
    //hide home screen

    // document.querySelector(".homeScreen").style.display = "none";
    document.querySelector(".homeScreen").remove();

    //show app screen

    document.querySelector(".appScreen").style.display = "block"; //in html we used display none so here we are blocking that

    // contact list screen
    
}

const fetchUsers =  async(url) => {
// const fetchUsers =  (url) => { 

    //fech the user

    // promise method
            // fetch(url).then((response) => {
            //     console.log(response);
            //     return response.json(); //change data from json to object and return it
            // }).then((data) => {
            //     console.log(data);
            // }).catch((error) => {
            //     console.log(error);
            // });

    //async await

    const response = await fetch(url);
    const data = await response.json(); //converting into object
    userList = data.results;
    console.log(userList);

    //hide the spinner

    document.querySelector(".showSpinner").style.display = "none";

    //show the user
dislayContactList(userList);
};

fetchUsers(apiEP);

//display contact list

const dislayContactList = (userList) => {
    console.log(userList);
document.getElementById("list").style.display = "block";

const str = "";


        userList.map((item, i) => {

            str += `<div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
                            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="" width="50px" class="rounded-circle">
                            <div class="ms-2">
                                <div class="fw-bolder">George</div>
                                <small>1 George st</small>
                            </div>
                        </button>
                        </h2>
                        <div id="collapse${i}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body d-flex flex-column align-items-center">
                            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="" width="150px" class="rounded-circle">
                                <div>
                                    <div class="fw-bolder">
                                        <i class="bi bi-person-circle"></i>
                                        George
                                    </div>
                                    <div>
                                        <a href="tel: 0829128649"><i class="bi bi-phone-fill"></i>
                                        0829128649</a>
                                        
                                    </div>
                                    <div>
                                    <a href="mailto:random@gmail.com"> <i class="bi bi-envelope-at-fill"></i>
                                        random@gmail.com</a>
                                    </div>
                                    <div>
                                        <a href="https://www.google.com/maps/place/1+George+St,+Sydney+NSW+2000" target="_blank"><i class="bi bi-globe"></i>
                                        1 George st</a>
                                    </div>
                                </div>


                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
                            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="" width="50px" class="rounded-circle">
                            <div class="ms-2">
                                <div class="fw-bolder">George</div>
                                <small>1 George st</small>
                            </div>
                        </button>
                        </h2>
                        <div id="collapse${i}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body d-flex flex-column align-items-center">
                            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="" width="150px" class="rounded-circle">
                                <div>
                                    <div class="fw-bolder">
                                        <i class="bi bi-person-circle"></i>
                                        George
                                    </div>
                                    <div>
                                        <a href="tel: 0829128649"><i class="bi bi-phone-fill"></i>
                                        0829128649</a>
                                        
                                    </div>
                                    <div>
                                    <a href="mailto:random@gmail.com"> <i class="bi bi-envelope-at-fill"></i>
                                        random@gmail.com</a>
                                    </div>
                                    <div>
                                        <a href="https://www.google.com/maps/place/1+George+St,+Sydney+NSW+2000" target="_blank"><i class="bi bi-globe"></i>
                                        1 George st</a>
                                    </div>
                                </div>


                        </div>
                        </div>
                    </div>`

        });

                    document.getElementById('accordionExample').innerHTML = str;

}