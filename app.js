const aiDatabase = [
    {
        name: "ChatGPT", dev: "OpenAI", category: "Teks & Chat", logo: "logos/chatgpt.png",
        short: "Asisten percakapan cerdas untuk menulis, analisis, dan pemecahan masalah.",
        desc: "ChatGPT adalah model bahasa besar (LLM) pionir yang mampu memahami konteks percakapan manusia secara mendalam, menyusun artikel, menerjemahkan bahasa, hingga membantu logika pemrograman.",
        features: ["Menulis esai, naskah, dan email profesional", "Meringkas dokumen panjang & analisis data", "Membantu belajar bahasa asing dan pemrograman"],
        license: "Legal • Freemium (Gratis & Plus)", url: "https://chat.openai.com"
    },
    {
        name: "Google Gemini", dev: "Google DeepMind", category: "Teks & Chat", logo: "logos/gemini.png",
        short: "AI multimodal Google yang terintegrasi dengan ekosistem pencarian dan Workspace.",
        desc: "Gemini dirancang secara native sebagai AI multimodal yang mampu memproses teks, gambar, audio, dan kode secara bersamaan dengan akses informasi terkini.",
        features: ["Terhubung langsung dengan ekosistem Google", "Analisis gambar dan dokumen PDF berukuran besar", "Riset cepat dan brainstorming ide kreatif"],
        license: "Legal • Freemium (Gratis & Advanced)", url: "https://gemini.google.com"
    },
    {
        name: "Claude AI", dev: "Anthropic", category: "Teks & Chat", logo: "logos/claude.png",
        short: "AI dengan gaya bahasa alami, sopan, dan sangat kuat dalam analisis dokumen serta coding.",
        desc: "Dikembangkan dengan prinsip keamanan AI tinggi, Claude terkenal mampu membaca buku atau kode panjang sekaligus dengan pemahaman struktur tulisan yang sangat rapi.",
        features: ["Penulisan kreatif dan penyuntingan alami", "Pembuatan tampilan antarmuka (Artifacts) instan", "Analisis kontrak atau jurnal ilmiah"],
        license: "Legal • Freemium", url: "https://claude.ai"
    },
    {
        name: "DeepSeek", dev: "DeepSeek AI", category: "Teks & Chat", logo: "logos/deepseek.png",
        short: "AI open-weight dengan kemampuan penalaran logika (reasoning) dan coding efisien.",
        desc: "DeepSeek menarik perhatian dunia karena efisiensi arsitekturnya yang mampu menyaingi model berbayar dalam hal matematika, logika mendalam, dan pemrograman.",
        features: ["Mode DeepThink untuk penalaran bertahap", "Penyelesaian soal matematika dan algoritma", "Dapat dijalankan secara lokal pada perangkat tertentu"],
        license: "Legal • Gratis & Open-Weight", url: "https://chat.deepseek.com"
    },
    {
        name: "Perplexity AI", dev: "Perplexity", category: "Teks & Chat", logo: "logos/perplexity.png",
        short: "Mesin pencari berbasis AI yang selalu menyertakan sumber referensi asli.",
        desc: "Berbeda dari chatbot biasa, Perplexity bekerja layaknya asisten riset yang menelusuri internet secara real-time lalu merangkum jawaban lengkap dengan tautan sumbernya.",
        features: ["Riset akademik dan berita real-time", "Menyertakan sitasi/link sumber terpercaya", "Meminimalisir halusinasi informasi"],
        license: "Legal • Freemium", url: "https://www.perplexity.ai"
    },
    {
        name: "Microsoft Copilot", dev: "Microsoft", category: "Teks & Chat", logo: "logos/copilot.png",
        short: "Asisten AI terintegrasi di Windows, Edge, Word, Excel, dan PowerPoint.",
        desc: "Copilot menggabungkan kekuatan model bahasa mutakhir dengan pencarian Bing dan produktivitas perkantoran Microsoft Office.",
        features: ["Membuat draf dokumen di Word & slide PowerPoint", "Mengolah rumus dan grafik di Excel", "Pembuatan gambar cepat lewat Bing Image Creator"],
        license: "Legal • Freemium", url: "https://copilot.microsoft.com"
    },
    {
        name: "Meta AI", dev: "Meta Platforms", category: "Teks & Chat", logo: "logos/meta-ai.png",
        short: "Asisten cerdas berbasis model Llama yang hadir langsung di WhatsApp & Instagram.",
        desc: "Memudahkan pengguna bertanya cepat, mencari inspirasi, hingga membuat stiker atau gambar langsung dari aplikasi perpesanan sehari-hari.",
        features: ["Akses instan di WhatsApp, IG, dan Facebook", "Berbasis model open-source Llama", "Pembuatan gambar cepat dalam obrolan"],
        license: "Legal • Gratis", url: "https://www.meta.ai"
    },
    {
        name: "Grok AI", dev: "xAI", category: "Teks & Chat", logo: "logos/grok.png",
        short: "AI dengan akses informasi real-time dari platform X dan gaya bahasa lugas.",
        desc: "Dikembangkan oleh xAI untuk menjawab pertanyaan dengan sudut pandang yang lugas serta memantau tren percakapan publik secara langsung.",
        features: ["Analisis tren terkini di platform X", "Pembuatan gambar dan ringkasan berita cepat", "Gaya interaksi santai dan langsung ke inti"],
        license: "Legal • Freemium", url: "https://grok.com"
    },
    {
        name: "Midjourney", dev: "Midjourney Inc.", category: "Gambar & Desain", logo: "logos/midjourney.png",
        short: "Generator gambar artistik dengan kualitas pencahayaan dan detail sinematik.",
        desc: "Salah satu AI pembuat gambar paling populer di kalangan desainer dan seniman digital karena hasil visualnya yang estetis dan fotorealistik.",
        features: ["Ilustrasi konsep seni, poster, dan karakter", "Kontrol rasio aspek dan gaya artistik detail", "Upscaling gambar resolusi tinggi"],
        license: "Legal • Berbayar", url: "https://www.midjourney.com"
    },
    {
        name: "DALL·E 3", dev: "OpenAI", category: "Gambar & Desain", logo: "logos/dalle.png",
        short: "Pembuat gambar dari deskripsi teks yang akurat memahami detail perintah.",
        desc: "Terintegrasi dengan ChatGPT, DALL·E 3 mampu menerjemahkan deskripsi kalimat panjang menjadi gambar ilustrasi maupun objek visual secara presisi.",
        features: ["Memahami perintah teks kompleks dengan akurat", "Dapat menyisipkan teks pendek di dalam gambar", "Mudah direvisi melalui percakapan"],
        license: "Legal • Freemium", url: "https://openai.com/dall-e-3"
    },
    {
        name: "Leonardo AI", dev: "Leonardo Interactive", category: "Gambar & Desain", logo: "logos/leonardo.png",
        short: "Platform desain visual AI favorit untuk aset game, karakter 3D, dan poster.",
        desc: "Menyediakan berbagai model visual terlatih serta fitur kanvas interaktif untuk mengedit bagian tertentu dari sebuah gambar.",
        features: ["Pembuatan aset game dan karakter konsisten", "AI Canvas untuk hapus/ganti objek gambar", "Kuota token gratis harian"],
        license: "Legal • Freemium", url: "https://leonardo.ai"
    },
    {
        name: "Adobe Firefly", dev: "Adobe", category: "Gambar & Desain", logo: "logos/firefly.png",
        short: "AI kreatif yang aman secara hak cipta komersial dan terhubung dengan Photoshop.",
        desc: "Dilatih menggunakan aset berlisensi resmi Adobe Stock sehingga aman digunakan untuk kebutuhan desain komersial profesional.",
        features: ["Generative Fill untuk memperluas atau menghapus objek", "Efek tekstur teks artistik", "Aman untuk kebutuhan komersial"],
        license: "Legal • Freemium", url: "https://firefly.adobe.com"
    },
    {
        name: "Canva Magic Studio", dev: "Canva", category: "Gambar & Desain", logo: "logos/canva.png",
        short: "Rangkaian fitur AI praktis untuk desain konten media sosial dan presentasi.",
        desc: "Mempermudah siapa saja menghapus latar belakang foto, memperluas gambar, hingga mengubah teks menjadi desain siap pakai dalam hitungan detik.",
        features: ["Hapus & ganti latar belakang otomatis", "Magic Edit untuk mengubah elemen foto", "Pembuatan desain media sosial otomatis"],
        license: "Legal • Freemium", url: "https://www.canva.com"
    },
    {
        name: "OpenAI Sora", dev: "OpenAI", category: "Video & Animasi", logo: "logos/sora.png",
        short: "AI pembuat video sinematik realistis hanya dari perintah teks.",
        desc: "Sora mampu mensimulasikan dunia fisik dan gerakan kamera kompleks menjadi klip video berdefinisi tinggi dari sekadar deskripsi cerita.",
        features: ["Text-to-Video dengan kualitas sinematik", "Memperpanjang durasi klip video", "Menjaga konsistensi objek dalam gerakan"],
        license: "Legal • Berbayar (Paket ChatGPT)", url: "https://sora.com"
    },
    {
        name: "Runway Gen-3", dev: "Runway AI", category: "Video & Animasi", logo: "logos/runway.png",
        short: "Studio penyuntingan dan pembuatan video AI standar industri kreatif.",
        desc: "Digunakan oleh pembuat film dan kreator konten untuk menghasilkan klip visual, menghapus latar video tanpa green screen, dan mengatur gerakan kamera.",
        features: ["Text-to-Video & Image-to-Video presisi", "Kontrol arah gerakan kamera (Motion Brush)", "Penghapus objek video otomatis"],
        license: "Legal • Freemium", url: "https://runwayml.com"
    },
    {
        name: "Kling AI", dev: "Kuaishou", category: "Video & Animasi", logo: "logos/kling.png",
        short: "Generator video AI dengan simulasi gerak tubuh manusia yang sangat natural.",
        desc: "Dikenal unggul dalam menghasilkan gerakan ekspresi wajah dan fisika gerak yang mulus pada video berdurasi panjang.",
        features: ["Animasi foto diam menjadi video hidup", "Gerakan karakter manusia yang realistis", "Tersedia kredit gratis untuk uji coba"],
        license: "Legal • Freemium", url: "https://klingai.com"
    },
    {
        name: "HeyGen", dev: "HeyGen Inc.", category: "Video & Animasi", logo: "logos/heygen.png",
        short: "Pembuat video presenter avatar AI dan penerjemah video dengan sinkronisasi bibir.",
        desc: "Memungkinkan pembuatan video edukasi atau presentasi menggunakan avatar digital yang berbicara berbagai bahasa dengan gerak bibir akurat.",
        features: ["Avatar presenter digital realistis", "Terjemahan video otomatis (Lip-Sync)", "Cocok untuk video pembelajaran & kursus"],
        license: "Legal • Freemium", url: "https://www.heygen.com"
    },
    {
        name: "ElevenLabs", dev: "ElevenLabs", category: "Suara & Musik", logo: "logos/elevenlabs.png",
        short: "AI pengubah teks menjadi suara manusia (Text-to-Speech) paling ekspresif.",
        desc: "Menghasilkan narasi suara dengan intonasi, napas, dan emosi layaknya pengisi suara profesional dalam puluhan bahasa termasuk Bahasa Indonesia.",
        features: ["Voice-over alami untuk video edukasi & Reels", "Dukungan multi-bahasa ekspresif", "Pembuatan efek suara (Sound Effects) dari teks"],
        license: "Legal • Freemium", url: "https://elevenlabs.io"
    },
    {
        name: "Suno AI", dev: "Suno Inc.", category: "Suara & Musik", logo: "logos/suno.png",
        short: "AI pencipta lagu lengkap dengan vokal, lirik, dan aransemen musik berbagai genre.",
        desc: "Cukup tuliskan tema lagu atau lirik buatan sendiri, Suno akan menciptakan lagu utuh lengkap dengan instrumen dan penyanyi virtual.",
        features: ["Membuat lagu utuh dari deskripsi tema", "Mendukung berbagai genre musik (Pop, Lo-fi, Rock, dll)", "Cocok untuk jingle atau latar konten"],
        license: "Legal • Freemium", url: "https://suno.com"
    },
    {
        name: "Udio", dev: "Uncharted Labs", category: "Suara & Musik", logo: "logos/udio.png",
        short: "Generator produksi musik AI dengan kualitas audio jernih dan aransemen kompleks.",
        desc: "Memberikan kontrol detail pada struktur lagu seperti intro, verse, chorus, hingga instrumental solo dengan kualitas suara studio.",
        features: ["Aransemen musik detail dan jernih", "Fitur remix dan perpanjangan bagian lagu", "Kualitas vokal digital yang realistis"],
        license: "Legal • Freemium", url: "https://www.udio.com"
    },
    {
        name: "GitHub Copilot", dev: "GitHub & OpenAI", category: "Coding & Kerja", logo: "logos/github-copilot.png",
        short: "Asisten pemrograman AI yang melengkapi baris kode langsung di editor.",
        desc: "Membantu developer menulis kode lebih cepat, menemukan bug, dan menjelaskan fungsi program dalam puluhan bahasa pemrograman.",
        features: ["Pelengkap kode otomatis (Autocomplete)", "Deteksi error dan saran perbaikan cepat", "Gratis untuk pelajar dan pengelola open-source"],
        license: "Legal • Freemium", url: "https://github.com/features/copilot"
    },
    {
        name: "Cursor AI", dev: "Anysphere", category: "Coding & Kerja", logo: "logos/cursor.png",
        short: "Editor kode modern berbasis AI yang memahami seluruh struktur folder proyek.",
        desc: "Dibangun di atas fondasi VS Code dengan kecerdasan buatan yang mampu mengedit banyak file sekaligus berdasarkan perintah bahasa manusia.",
        features: ["Membaca konteks seluruh repository proyek", "Membuat dan merombak kode multi-file", "Mempercepat pembuatan aplikasi web & mobile"],
        license: "Legal • Freemium", url: "https://www.cursor.com"
    },
    {
        name: "Gamma AI", dev: "Gamma Tech", category: "Coding & Kerja", logo: "logos/gamma.png",
        short: "Pembuat slide presentasi, dokumen, dan halaman web estetis dalam hitungan detik.",
        desc: "Mengubah catatan teks atau topik pelajaran menjadi materi presentasi visual yang rapi tanpa perlu mengatur tata letak secara manual.",
        features: ["Otomatisasi desain slide presentasi", "Ekspor mudah ke PDF atau PowerPoint", "Tata letak modern dan responsif"],
        license: "Legal • Freemium", url: "https://gamma.app"
    },
    {
        name: "Notion AI", dev: "Notion Labs", category: "Coding & Kerja", logo: "logos/notion.png",
        short: "Asisten catatan cerdas untuk merapikan jadwal, database, dan ringkasan rapat.",
        desc: "Bekerja langsung di dalam ruang kerja Notion untuk merangkum catatan kuliah, membuat daftar tugas otomatis, dan memperbaiki tata bahasa.",
        features: ["Merangkum catatan kuliah atau rapat", "Membuat tabel jadwal dan tracker otomatis", "Terintegrasi dengan basis pengetahuan pribadi"],
        license: "Legal • Freemium", url: "https://www.notion.so/product/ai"
    }
];

const aiGrid = document.getElementById('aiGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
let currentCategory = 'all';

function renderCards() {
    const keyword = searchInput.value.toLowerCase();
    aiGrid.innerHTML = '';

    const filtered = aiDatabase.filter(item => {
        const matchCat = currentCategory === 'all' || item.category === currentCategory;
        const matchSearch = item.name.toLowerCase().includes(keyword) || 
                            item.short.toLowerCase().includes(keyword) ||
                            item.category.toLowerCase().includes(keyword);
        return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
        aiGrid.innerHTML = `<div class="col-span-full text-center py-12 text-slate-500 glass rounded-3xl">Tidak ditemukan AI yang cocok dengan kata kunci pencarianmu.</div>`;
        return;
    }

    filtered.forEach((ai) => {
        const initials = ai.name.substring(0, 2).toUpperCase();
        const card = document.createElement('div');
        card.className = 'ai-card glass rounded-3xl p-6 cursor-pointer flex flex-col justify-between group shadow-xl shadow-sage-500/5';
        card.innerHTML = `
            <div>
                <div class="flex items-center justify-between gap-3 mb-4">
                    <div class="w-14 h-14 rounded-2xl bg-sage-500/20 border border-sage-400/30 flex items-center justify-center overflow-hidden shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                        <img src="${ai.logo}" alt="Logo ${ai.name}" class="w-9 h-9 object-contain"
                            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <span style="display:none" class="w-full h-full items-center justify-center font-extrabold text-sage-700 dark:text-sage-300 text-sm">${initials}</span>
                    </div>
                    <span class="text-[11px] font-extrabold px-3 py-1 rounded-xl bg-sage-500/15 text-sage-700 dark:text-sage-300 border border-sage-500/10">
                        ${ai.category}
                    </span>
                </div>
                <h3 class="text-xl font-extrabold group-hover:text-sage-500 transition-colors">${ai.name}</h3>
                <p class="text-xs text-slate-400 font-medium mb-3">Oleh ${ai.dev}</p>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">${ai.short}</p>
            </div>
            <div class="mt-6 pt-4 border-t border-sage-300/20 dark:border-sage-700/40 flex items-center justify-between text-xs font-bold text-sage-600 dark:text-sage-300">
                <span>Tinjau Informasi AI</span>
                <i class="fa-solid fa-arrow-right group-hover:translate-x-1.5 transition-transform"></i>
            </div>
        `;
        card.addEventListener('click', () => openModal(ai));
        aiGrid.appendChild(card);
    });
}

// Modal Tinjau AI
const modal = document.getElementById('aiModal');
const closeModal = document.getElementById('closeModal');

function openModal(ai) {
    const initials = ai.name.substring(0, 2).toUpperCase();
    document.getElementById('modalLogoBox').innerHTML = `
        <img src="${ai.logo}" alt="${ai.name}" class="w-10 h-10 object-contain"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <span style="display:none" class="w-full h-full items-center justify-center font-extrabold text-xl text-sage-600 dark:text-sage-300">${initials}</span>
    `;
    document.getElementById('modalCategory').textContent = ai.category;
    document.getElementById('modalTitle').textContent = ai.name;
    document.getElementById('modalDev').textContent = `Dikembangkan oleh ${ai.dev} • Logo path: ${ai.logo}`;
    document.getElementById('modalDesc').textContent = ai.desc;
    document.getElementById('modalLicense').textContent = ai.license;
    document.getElementById('modalLink').href = ai.url;

    const featList = document.getElementById('modalFeatures');
    featList.innerHTML = ai.features.map(f => `<li class="flex items-start gap-2"><i class="fa-solid fa-check text-sage-500 mt-1"></i><span>${f}</span></li>`).join('');

    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
});
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
});

// Filter & Search Events
searchInput.addEventListener('input', renderCards);
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
            b.classList.remove('bg-sage-600', 'text-white', 'shadow-md');
            b.classList.add('glass');
        });
        btn.classList.add('bg-sage-600', 'text-white', 'shadow-md');
        btn.classList.remove('glass');
        currentCategory = btn.dataset.cat;
        renderCards();
    });
});

// Dark / Light Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    themeIcon.className = isDark ? 'fa-solid fa-sun text-base' : 'fa-solid fa-moon text-base';
});

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

// Scroll Reveal & Counters
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });
reveals.forEach(r => revealObserver.observe(r));

document.querySelectorAll('.counter').forEach(counter => {
    const target = +counter.dataset.target;
    let count = 0;
    const step = Math.ceil(target / 30);
    const timer = setInterval(() => {
        count += step;
        if (count >= target) {
            counter.textContent = target + '+';
            clearInterval(timer);
        } else {
            counter.textContent = count;
        }
    }, 40);
});

renderCards();
