window.addEventListener("load", function () {
    $(function () {
        var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
    
        // Variables privadas
        var links = this.el.find(".link");
        // Evento
        links.on(
            "click",
            { el: this.el, multiple: this.multiple },
            this.dropdown
        );
        };
    
        Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        ($this = $(this)), ($next = $this.next());
    
        $next.slideToggle();
        $this.parent().toggleClass("open");
    
        if (!e.data.multiple) {
            $el.find(".submenu").not($next).slideUp().parent().removeClass("open");
        }
        };
    
        var accordion = new Accordion($("#accordion"), false);
    });
    
    
    let announcement = document.querySelector(".announcement a");
    let reviewBtn = document.querySelector(".review-btn a");
    let accordionBox = document.querySelector(".accordion-box");
    let userReview = document.querySelector(".user-review");
    
    announcement.addEventListener("click", function() {
        accordionBox.style.display = "block";
        announcement.classList.add("active1");
        announcement.classList.add("active2");
        reviewBtn.classList.remove("active1");
        reviewBtn.classList.remove("active2");
        userReview.style.display = "none";
        
        // 추가: 공지사항 클릭 시 글자색 변경
        announcement.style.color = "#34c987";
        reviewBtn.style.color = "#333";
    });
    
    reviewBtn.addEventListener("click", function() {
        accordionBox.style.display = "none";
        announcement.classList.remove("active1");
        announcement.classList.remove("active2");
        reviewBtn.classList.add("active1");
        reviewBtn.classList.add("active2");
        userReview.style.display = "block";
        
        // 추가: 이용후기 클릭 시 글자색 변경
        announcement.style.color = "#333";
        reviewBtn.style.color = "#34c987";
    });
    
    // 추가: 이용후기 초기 상태로 설정
    announcement.click();

    // 게시글 작성 폼
    const writeBtn = document.querySelector(".write.btn")
    const postForm = document.querySelector(".post-form")
    const postTitleInput = document.getElementById("postTitle");
    const postContentInput = document.getElementById("postContent");
    const postImageInput = document.getElementById("postImage");
    const addPostBtn = document.getElementById("addPostBtn");
    const postList = document.getElementById("postList");
    const postDateInput = document.getElementById("postDate"); // Add this line
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const clearBtn = document.getElementById("clearBtn");
    
    // 리뷰 작성하기 버튼
    writeBtn.addEventListener("click", function(){
        postForm.style.display = "block";
    })

// 저장된 게시글 배열
let posts = [];

if (localStorage.getItem("posts")) {
    posts = JSON.parse(localStorage.getItem("posts"));
    for (const post of posts) {
    addPostToDOM(post);
    
    }
}

// 게시글 추가 함수
function addPostToDOM(post) {
    const postElement = document.createElement("li");
    postElement.classList.add("post");
    postElement.innerHTML = `
            <div class="post-content">
                <h2>${post.title}</h2>
                ${
                post.date ? `<p>Date: ${post.date}</p>` : ""
                } <!-- Display the date if it's not null -->
                <div class="post-details">
                    <p>${post.content}</p>
                    ${
                    post.image
                        ? `<img src="${post.image}" alt="게시글 이미지">`
                        : ""
                    }
                </div>
                <button class="delete-post-btn">닫기</button> <!-- Close button -->
            </div>
        `;

    const deleteButton = postElement.querySelector(".delete-post-btn");
    deleteButton.addEventListener("click", function () {

    const index = posts.indexOf(post);
    if (index !== -1) {
        posts.splice(index, 1);
        localStorage.setItem("posts", JSON.stringify(posts));
        postElement.remove();
    }
    });
    postList.prepend(postElement);
}

// 게시글 작성 버튼 클릭 이벤트 처리
addPostBtn.addEventListener("click", function () {
    const title = postTitleInput.value;
    const content = postContentInput.value;
    const imageFile = postImageInput.files[0];
    const date = postDateInput.value; // Get the date input value
    if (title && content) {
    // 이미지를 base64 형식으로 변환
    const reader = new FileReader();
    reader.onload = function () {
        // 새 게시글 객체 생성
        const newPost = {
        title,
        content,
        image: reader.result, // 이미지를 base64로 설정
        date: date || null, // Use null if date is not provided
        };

        // 배열에 게시글 추가
        posts.push(newPost);

        // 로컬 스토리지에 게시글 저장
        localStorage.setItem("posts", JSON.stringify(posts));

        // 화면에 게시글 추가
        addPostToDOM(newPost);

        // 입력 필드 초기화
        postTitleInput.value = "";
        postContentInput.value = "";
        postImageInput.value = "";
        postDateInput.value = "";
    };
    if (imageFile) {
        reader.readAsDataURL(imageFile); // 이미지 파일을 base64로 읽기
    } else {
        // 이미지가 없을 경우도 처리
        reader.onload();
    }
    }
});
// 검색기능
searchBtn.addEventListener("click", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const filterdePosts = posts.filter((post) => {
    return (
        // 배열내에서 지정된 값또는 요소가 포함되어 있는지 확인
        post.title.toLowerCase().includes(searchTerm) ||
        post.content.toLowerCase().includes(searchTerm)
    );
    });
    postList.innerHTML = "";
    for (const post of filterdePosts) {
    addPostToDOM(post);
    }
});
// 지우기 버튼에 클릭 이벤트 리스너를 추가
clearBtn.addEventListener("click", function () {
    // 검색입력 필드를 지우기
    searchInput.value = "";
    // 기존 게시물 목록을 지우고 모든 게시물 표시
    postList.innerHTML = "";
    for (const post of posts) {
    addPostToDOM(post);
    }
});


    });