customElements.define(
  "footer-zone",
  class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer class="footer-zone">
            <div class="position-relative">
                <div class="position-absolute left-0 bottom-0 col-4">
                    <img src="img/1003-img-16.png" class="w-100 h-100 obj-fit-contain sm-obj-position-center">
                </div>
                <div class="container py-5 position-relative text-size-10">
                    <div class="row pt-md-5">
                        <div class="col-lg-4 px-md-2 px-4">
                            <div class="row text-md-left">
                                <div class="col-6 pb-5">
                                    <h3 class="text-size-20 text-color-1">關於我們</h3>
                                    <div class="pt-3 text-size-14 line-height-30">
                                        <a class="d-flex align-items-center justify-content-md-start"
                                            href="about.html?#about-brand">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                            </svg>
                                            品牌理念
                                        </a>
                                        <a class="d-flex align-items-center justify-content-md-start"
                                            href="about.html?#about-introduce">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                            </svg>
                                            診所介紹
                                        </a>
                                        <a class="d-flex align-items-center justify-content-md-start"
                                            href="about.html?#about-address">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                            </svg>
                                            交通資訊
                                        </a>
                                    </div>
                                </div>
                                <div class="col-6 pb-5">
                                    <h3 class="text-size-20 text-color-1">專業團隊</h3>
                                    <div class="pt-3 text-size-14 line-height-30">
                                        <a class="d-flex align-items-center justify-content-md-start"
                                            href="team-list.html#doctor">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                            </svg>
                                            醫師團隊
                                        </a>
                                        <a class="d-flex align-items-center justify-content-md-start"
                                            href="team-list.html#nutritionist">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                            </svg>
                                            營養師團隊
                                        </a>
                                        <a class="d-flex align-items-center justify-content-md-start"
                                            href="team-list.html#nurse">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                            </svg>
                                            物理治療師團隊
                                        </a>
                                    </div>
                                </div>
                                <!--
                                <div class="col-6 pb-5">
                                    <h3 class="text-size-20 text-color-1">知識平台</h3>
                                    <div class="pt-3 text-size-14 line-height-30">
                                        <a class="d-flex align-items-center justify-content-md-start" href="case-sharing.html">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                            案例分享
                                        </a>
                                        <a class="d-flex align-items-center justify-content-md-start" href="health-education.html">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                            衛教新知
                                        </a>
                                    </div>
                                </div>
                                -->
                                <div class="col-6 pb-5">
                                    <h3 class="text-size-20 text-color-1">友站連結</h3>
                                    <div class="pt-3 text-size-14 line-height-30">
                                        <a class="d-flex align-items-center justify-content-md-start"
                                            href="https://www.aicarept.com/" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                            </svg>
                                            生生優動
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8 px-md-2 px-4">
                            <h3 class="text-size-20 text-color-1 text-md-left">療程介紹</h3>
                            <div class="pt-3 text-size-14 line-height-30">
                                <div class="row">
                                    <div class="col-md-4 col-6 pb-5">
                                        <div class="d-flex align-items-center justify-content-md-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                            </svg>
                                            預防醫學
                                        </div>
                                        <a class="d-block text-color-4 submenu" href="post-theme-1.html">EECP體外反搏</a>
                                        <a class="d-block text-color-4 submenu" href="post-theme-2.html">ILIB靜脈雷射</a>
                                    </div>
                                    <!-- 依照需求先隱藏 start -->
                                    <!-- <div class="col-md-4 col-6 pb-5">
                                        <a class="d-flex align-items-center justify-content-md-start" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                            神經刺激療法
                                        </a>
                                        <a class="d-block text-color-4 submenu" href="#">rTMS重覆經顱磁刺激</a>
                                    </div> -->
                                    <!-- 依照需求先隱藏 end -->
                                    <div class="col-md-4 col-6 pb-5">
                                        <div class="d-flex align-items-center justify-content-md-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                            </svg>
                                            物理及運動治療
                                        </div>
                                        <a class="d-block text-color-4 submenu" href="post-theme-8.html#fun_1">徒手治療</a>
                                        <a class="d-block text-color-4 submenu" href="post-theme-8.html#fun_2">運動治療</a>
                                    </div>
                                    <div class="col-md-4 col-6 pb-5">
                                        <div class="d-flex align-items-center justify-content-md-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                            </svg>
                                            減重與營養門診
                                        </div>
                                        <a class="d-block text-color-4 submenu" href="post-theme-3.html">減重與營養課程</a>
                                        <a class="d-block text-color-4 submenu" href="post-theme-4.html">善纖達</a>
                                        <a class="d-block text-color-4 submenu" href="post-theme-5.html">CGM連續血糖監測儀</a>
                                    </div>
                                    <div class="col-md-4 col-6 pb-5">
                                        <div class="d-flex align-items-center justify-content-md-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                            </svg>
                                            增生治療
                                        </div>
                                        <a class="d-block text-color-4 submenu" href="post-theme-7.html">增生療法</a>
                                    </div>
                                    <div class="col-md-4 col-6 pb-5">
                                        <!-- 依照需求先隱藏 start -->
                                        <!-- <a class="d-flex align-items-center justify-content-md-start" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                            </svg>
                                            健康檢測評估
                                        </a> -->
                                        <!-- 依照需求先隱藏 end -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="position-relative text-size-10">
                    <p class="text-center text-size-12 px-lg-0 px-3">
                        本網站宣傳名稱與仿單不同（部分為仿單核准適應症外的使用介紹，或口語化供理解）僅供參考，非用於為診療服務項目說明或醫療效果之宣傳；任何療程、儀器名稱、效果等，均以醫師親自說明為準。
                    </p>
                </div>
            </div>
            <div class="bg-color-1 copyrights-zone py-3">
                <p class="rights text-size-12 m-0 text-white">
                    生生優活版權所有 © All Rights Reserved.
                </p>
                <p class="dash text-size-12 m-0 text-white">
                    /
                </p>
                    <a class="text-size-12 m-0 text-white" href="http://127.0.0.1:5500/privacy-policy.html">
                        隱私權政策＆條款 Privacy Protection Terms
                    </a>
                
                <p class="reCAPTCHA text-size-12 m-0 text-white">
                    本站採用 reCAPTCHA 保護機制<a href="https://policies.google.com/privacy" target="_blank">隱私權</a> &amp; <a
                    href="https://policies.google.com/terms" target="_blank">條款</a>
                </p>
                
            </div>
        </footer>
        `;
    }
  }
);
