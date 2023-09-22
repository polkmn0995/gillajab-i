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
    });