// DOM(Document Object Model) 컨텐츠가 모두 로드된 후에 스크립트를 실행합니다.
document.addEventListener('DOMContentLoaded', () => {
    
    // 아티스트 정보 목록( 아티스트 사진, 공연 예정 날짜, 이전 공연 및 주소 링크)
    const artistsData = [
        {
            id: 1,
            name: "Nell",
            photo: "https://i.namu.wiki/i/cSPbodPlkjl_cneKjScGvXvORwTc1G0vNsdnffD1KrGSn1_GXqUKNw4cq7DGJrm_JAZEEmLoDFtfK4tk_ReeH0fz3gxlFtggvtE8lkCTJyvD_xPeU688mX7Xbl8ceqNZltQohaJxpWiW_POWDbQpaQ.webp",
            upcoming: [
                { date: "2025-12-24", name: "NELL'S ROOM 2025", venue: "잠실학생체육관", ticketLink: "" }
            ],
            past: [
                { name: "COLORS IN BLACK", infoLink: "", youtubeLink: "" },
                { name: "C", infoLink: "", youtubeLink: "" }
            ]
        },
        {
            id: 2,
            name: "너드커넥션",
            photo: "https://i.namu.wiki/i/aUObhSwIvqOxpUlWDwZsquqszaH4eSpJp9tDs0bIgTTRnUBgs61k2ZjlTFqeIKlgoKF40vNeXGb1aqMHvTKolJA7RbhG7m8v3KiZGJbDb7Vda9FiJD7gKuYqJtbQvWEMhGr7QXUU6_D4TKxi79d1yQ.webp",
            upcoming: [
                { date: "2025-11-08", name: "너드커넥션 단독 콘서트", venue: "홍대 왓챠홀", ticketLink: "" }
            ],
            past: [
                { name: "Great Seoul Invasion", infoLink: "", youtubeLink: "" }
            ]
        },
        {
            id: 3,
            name: "윤마치",
            photo: "https://i.namu.wiki/i/jkRJdwBJrT9pbSA-G8jgIjOKA16BboIOblKVAhoX8f9NncktPbBu4uoLfEQVIeYK8gf8Sm6lxSTNew50NFAeTUZ17EN8vAwDwKXyanAOpm646orqFyvZgbko5JYFMTHjRK7Av_AJoDoGisKvD6vQTA.webp",
            upcoming: [
                { date: "2025-10-18", name: "윤마치 소극장 콘서트", venue: "구름아래소극장", ticketLink: "" }
            ],
            past: [
                { name: "My First Live", infoLink: "", youtubeLink: "" }
            ]
        },
        {
            id: 4,
            name: "리도어",
            photo: "https://i.namu.wiki/i/dzzQC1gB0O1BGwpAJB0nOo2nAmqSUGhXqV77SIBMmYlGHKn74AcEvVy0qUxNu2b-Mk2z_EajRPJy-ZnmZ8K0jK894iDRasBc44uUD117-y4FOUmMeffal_uUCEkQ5O3rLBwPbX9ck2jh_hLvKwmjTg.webp",
            upcoming: [
                { date: "2025-09-27", name: "리도어 쇼케이스", venue: "KT&G 상상마당", ticketLink: "" }
            ],
            past: [
                { name: "EP 발매 기념 공연", infoLink: "#", youtubeLink: "" }
            ]
        },
        {
            id: 5,
            name: "쏜애플",
            photo: "https://i.namu.wiki/i/88wHPLOoqkjXUpB7N0QW_pHI8BsyBGrLer_ZKCOFqMMf0bIrCKG4cYhy9n1FE6Ez5nD7JckarrPCYJHhN_u_paEacYOaX7JRFidWKxKzRr3npNyKmtt26Ujk9kMr4uZmjZNSC5erqBK7CmuVTbAOcw.webp",
            upcoming: [
                { date: "2025-12-31", name: "불구경 2025", venue: "블루스퀘어 마스터카드홀", ticketLink: "" }
            ],
            past: [
                { name: "동물", infoLink: "", youtubeLink: "" }
            ]
        },
        {
            id: 6,
            name: "더 폴스",
            photo: "https://i.namu.wiki/i/E5fc8Vnc8V-JeWVYGcH6qiUdNnErYLNTNu0RniwiNP0Huu0sz4OXYan9NG5pKvUjB0gaRpGm2wywNlQQkE8Rsrn4XeUe0KZIkn21NcFkM70Ekn36hXL9z3_11q84n4C6hqr725jsqR85D4SsTLCvfQ.webp",
            upcoming: [
                { date: "2025-11-22", name: "The Poles 1st Album Concert", venue: "무신사 개러지", ticketLink: "" }
            ],
            past: [
                { name: "펜타포트 락 페스티벌 2024", infoLink: "", youtubeLink: "" }
            ]
        },
         {
            id: 7,
            name: "음율",
            photo: "https://i.namu.wiki/i/lcJ8-RA8Xo3aXDTUIxCvvuCmIdguPaktW3rcTbd5CSNuSOT6B2uBf3MbCIneQsXT9A15H9c7vIhHNAeR30lLwYrdWuO7O1u0v5hJ753sGPP6cNDvQWv-HYHuSldlqc5KUablfoPMxoO2Ptb5FyzZqw.webp",
            upcoming: [
                { date: "2025-10-11", name: "음율의 밤", venue: "벨로주 홍대", ticketLink: "" }
            ],
            past: [
                { name: "데뷔 싱글 발매 쇼케이스", infoLink: "", youtubeLink: "" }
            ]
        },
        {
            id: 8,
            name: "글렌체크",
            photo: "https://i.namu.wiki/i/EKAZFHFvsgVPICWvPbftKlW9CJ8jxHsS-Xt_4NWgHsipy-_Ta4dw5_eGHK-TTG1fZhIBTSgdLIVR_-OYiHbbNgYJBDhvkwmOyvWkRuMOSQpi9HKhfTbzQEvH3Fxkph-IGCHPAsk_osQhVs4QLllMTg.webp",
            upcoming: [
                { date: "2025-11-15", name: "Glen Check Live in Seoul", venue: "예스24 라이브홀", ticketLink: "" }
            ],
            past: [
                { name: "Bleach", infoLink: "", youtubeLink: "" }
            ]
        },
        {
            id: 9,
            name: "1415",
            photo: "https://i.namu.wiki/i/rnN82Sg_IxOoNwQmgso5PlcvbvzS--vZtwLhZlCqdZ83-XwYluaAqPYtyGFKFCSJC4GRHPEt4BCchSWly3xuoqxF-wpi8bEg1bFW0BeHWzLDw9EFUYy-QTtrSByKyvyBqFQGa0lNECpGBYsdzturjQ.webp",
            upcoming: [
                { date: "2025-09-20", name: "1415 FROM:US", venue: "웨스트브릿지 라이브홀", ticketLink: "" }
            ],
            past: [
                { name: "선을 그어 주던가", infoLink: "", youtubeLink: "" }
            ]
        }
    ];

    // --- 요소들 변수 할당 ---
    const backgroundSlider = document.getElementById('background-slider');
    const artistGrid = document.getElementById('artist-grid');
    const calendarView = document.getElementById('calendar-view');
    const pastShowsView = document.getElementById('past-shows-view');
    const modalContainer = document.getElementById('modal-container');

    // --- 상태 관리를 위한 변수들 ---
    let currentSlideIndex = 0; // 현재 배경 슬라이드의 인덱스
    let calendarDate = new Date(); // 캘린더가 표시할 현재 날짜
    let currentArtistEvents = []; // 캘린더에 표시할 특정 아티스트의 공연 목록

    // --- 앱 초기 실행 함수 ---
    function initialize() {
        setupBackgroundSlider(); // 배경 슬라이드쇼 설정
        populateArtistGrid(); // 아티스트 그리드 채우기
        setupEventListeners(); // 모든 이벤트 리스너 설정
        setInterval(nextSlide, 10000); // 10초마다 배경 슬라이드 사진 변경
    }

    // --- 배경 슬라이드 설정 ---
    function setupBackgroundSlider() {
        backgroundSlider.innerHTML = ''; // 기존 슬라이드 초기화
        artistsData.forEach((artist, index) => {
            const slide = document.createElement('div');
            slide.className = 'slide';
            slide.style.backgroundImage = `url(${artist.photo})`;
            if (index === 0) {
                slide.classList.add('active'); // 첫 번째 슬라이드는 활성화
            }
            backgroundSlider.appendChild(slide);
        });
    }
    
    // --- 다음 슬라이드로 넘기기 ---
    function nextSlide() {
        const slides = document.querySelectorAll('.slide');
        if (slides.length === 0) return;
        slides[currentSlideIndex].classList.remove('active'); // 현재 슬라이드 숨기기
        currentSlideIndex = (currentSlideIndex + 1) % slides.length; // 다음 인덱스로 이동 (마지막이면 처음으로)
        slides[currentSlideIndex].classList.add('active'); // 다음 슬라이드 보이기
    }

    // --- 아티스트 그리드 생성 ---
    function populateArtistGrid() {
        artistGrid.innerHTML = ''; // 그리드 초기화
        artistsData.forEach(artist => {
            const item = document.createElement('div');
            item.className = 'grid-item';
            item.innerHTML = `
                <h3 class="artist-name">${artist.name}</h3>
                <div class="hover-buttons">
                    <button data-artist-id="${artist.id}" class="upcoming-btn custom-btn">공연 예정 일정</button>
                    <button data-artist-id="${artist.id}" class="past-btn custom-btn">이전 공연</button>
                </div>
            `;
            artistGrid.appendChild(item);
        });
    }

    // --- 이전 공연 목록을 보여주기 ---
    function showPastShows(artistId) {
        const artist = artistsData.find(a => a.id == artistId);
        if (!artist) return;

        document.getElementById('past-shows-artist-name').textContent = `${artist.name} - 이전 공연`;
        const listEl = document.getElementById('past-shows-list');
        listEl.innerHTML = '';

        if (artist.past.length === 0) {
            listEl.innerHTML = '<p>이전 공연 정보가 없습니다.</p>';
        } else {
            artist.past.forEach(show => {
                const item = document.createElement('div');
                item.className = 'past-show-item';
                item.innerHTML = `<h4 class="past-show-title">${show.name}</h4>`;
                
                const details = document.createElement('div');
                details.className = 'past-show-details';
                details.innerHTML = `
                    <div class="details-content">
                        <div class="details-section">
                            <h5>공연 정보</h5>
                            <a href="${show.infoLink}" target="_blank">관련 정보 보러가기</a>
                        </div>
                        <div class="details-section">
                            <h5>관련 영상</h5>
                            <div class="video-container">
                                <iframe src="${show.youtubeLink}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                `;
                item.appendChild(details);

                // 클릭 시 상세 정보(details)를 토글 처리
                item.addEventListener('click', () => {
                    details.classList.toggle('show');
                });
                listEl.appendChild(item);
            });
        }
        pastShowsView.style.display = 'block';
        setTimeout(() => pastShowsView.classList.add('show'), 10);
    }

    // --- 팝업 보여주기 ---
    function showModal(title, content) {
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-body').innerHTML = content;
        modalContainer.style.display = 'flex';
    }

    // --- 팝업 숨기기 ---
    function hideModal() {
        modalContainer.style.display = 'none';
    }
    
    // --- 모든 이벤트 리스너를 설정 ---
    function setupEventListeners() {
        // 아티스트 그리드에 클릭 리스너 추가
        artistGrid.addEventListener('click', (e) => {
            const upcomingButton = e.target.closest('.upcoming-btn');
            const pastButton = e.target.closest('.past-btn');
            if (upcomingButton) showCalendar(upcomingButton.dataset.artistId);
            if (pastButton) showPastShows(pastButton.dataset.artistId);
        });

        // 이전 공연 뷰 닫기 버튼
        document.getElementById('close-past-shows').addEventListener('click', () => {
            pastShowsView.classList.remove('show');
            setTimeout(() => {
                pastShowsView.style.display = 'none';
            }, 500);
        });
        

        // --- 상단 네비게이션 메뉴 버튼들 ---
        document.getElementById('about-us-btn').addEventListener('click', () => {
            showModal('About Us', '<p>저희는 아티스트와 팬들을 연결하는 플랫폼입니다. 이곳에서 좋아하는 아티스트의 최신 공연 소식을 확인하고, 지난 공연의 감동을 다시 느껴보세요.</p>');
        });

        document.getElementById('regist-artist-btn').addEventListener('click', () => {
            const formContent = `
                <form id="regist-artist-form">
                    <div class="form-group">
                        <label for="artist-name">아티스트 이름</label>
                        <input type="text" id="artist-name" required>
                    </div>
                    <div class="form-group">
                        <label for="debut-date">데뷔일</label>
                        <input type="date" id="debut-date" required>
                    </div>
                    <div class="form-group">
                        <label for="contact-email">담당자 이메일</label>
                        <input type="email" id="contact-email" required>
                    </div>
                    <button type="submit" class="btn-green">등록 요청</button>
                </form>
            `;
            showModal('아티스트 등록 요청', formContent);

            // 폼 제출 이벤트 처리
            document.getElementById('regist-artist-form').addEventListener('submit', (e) => {
                e.preventDefault(); // 기본 제출 동작 방지
                const modalBody = document.getElementById('modal-body');
                modalBody.innerHTML = '<p style="text-align: center; font-weight: bold;">아티스트 등록이 성공적으로 요청되었습니다.</p>';
                setTimeout(hideModal, 2000); // 2초 후 모달 닫기
            });
        });

        document.getElementById('regist-concert-btn').addEventListener('click', () => {
             const formContent = `
                <form id="regist-concert-form">
                    <div class="form-group">
                        <label for="concert-artist">아티스트 선택</label>
                        <select id="concert-artist" required>
                            ${artistsData.map(a => `<option value="${a.name}">${a.name}</option>`).join('')}
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="concert-name">공연 이름</label>
                        <input type="text" id="concert-name" required>
                    </div>
                    <div class="form-group">
                        <label for="concert-date">공연 날짜</label>
                        <input type="date" id="concert-date" required>
                    </div>
                    <div class="form-group">
                        <label for="concert-venue">공연 장소</label>
                        <input type="text" id="concert-venue" required>
                    </div>
                    <button type="submit" class="btn-purple">일정 등록 요청</button>
                </form>
            `;
            showModal('공연 일정 등록 요청', formContent);

            document.getElementById('regist-concert-form').addEventListener('submit', (e) => {
                e.preventDefault();
                const modalBody = document.getElementById('modal-body');
                modalBody.innerHTML = '<p style="text-align: center; font-weight: bold;">공연 일정 등록이 성공적으로 요청되었습니다.</p>';
                setTimeout(hideModal, 2000);
            });
        });

        // 팝업 닫기 버튼
        document.getElementById('modal-close-btn').addEventListener('click', hideModal);
      
    }
    initialize();
});

