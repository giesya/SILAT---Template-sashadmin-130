(function () {
    "use strict";

    // =========================================================================
    // Unified Chat Engine & Data Store: POV Pelaku Usaha / Nelayan -> Admin KKP
    // =========================================================================

    window.chatContacts = [
        {
            id: "helpdesk-kkp",
            name: "Helpdesk Perizinan KKP",
            fullName: "Helpdesk Perizinan KKP (Pusat)",
            roleTitle: "Petugas Pelayanan Terpadu Satu Pintu (PTSP) DJPT KKP",
            avatarChar: "H",
            avatarBg: "#2563eb",
            time: "today, 14:16",
            lastMsg: "Dokumen SIPI KM. Bahari Nusantara telah terverifikasi...",
            lastMsgPrefix: "↵ ",
            tag: "SIUP & SIPI",
            status: "Assigned",
            unread: 0,
            messages: [
                { type: "text", sender: "them", text: "Selamat datang di Layanan Bantuan Terpadu Perizinan KKP (SILAT). Ada yang dapat kami bantu terkait permohonan izin operasional kapal Bapak/Ibu?", time: "09:15" },
                { type: "text", sender: "me", text: "Selamat pagi Admin, saya ingin menanyakan status verifikasi permohonan perpanjangan SIPI untuk kapal KM. Bahari Nusantara (No. Permohonan: AG-2026-0014).", time: "09:18" },
                { type: "text", sender: "them", text: "Baik Pak Hendra, berkas permohonan AG-2026-0014 saat ini sudah diverifikasi oleh tim verifikator teknis. Bukti pelunasan PNBP dan dokumen LPS telah valid.", time: "09:20" },
                { type: "text", sender: "me", text: "Terima kasih informasinya. Apakah dokumen e-SIPI digital sudah bisa segera diunduh?", time: "09:22" },
                { type: "text", sender: "them", text: "Dokumen SIPI KM. Bahari Nusantara telah terverifikasi dan saat ini dalam antrean tanda tangan elektronik (BSrE). Estimasi siap unduh dalam 1x24 jam kerja.", time: "14:16" },
                { 
                    type: "link", 
                    sender: "them", 
                    title: "Portal Tracking Status Permohonan SILAT KKP", 
                    url: "https://silat.kkp.go.id/portal/verifikasi/dokumen-0982", 
                    time: "14:16" 
                }
            ]
        },
        {
            id: "verifikator-teknis",
            name: "Verifikator Teknis Kapal",
            fullName: "Verifikator Teknis Dokumen & Kapal",
            roleTitle: "Tim Pemeriksa Kelaikan Fisik & Alat Penangkapan Ikan",
            avatarChar: "V",
            avatarBg: "#2563eb",
            time: "today, 14:14",
            lastMsg: "terlampir bukti verifikasi fisik...",
            lastMsgPrefix: "",
            tag: "Verifikasi Teknis",
            status: "Assigned",
            unread: 1,
            messages: [
                { type: "text", sender: "me", text: "Selamat siang Pak Verifikator, foto fisik armada, surat ukur, dan spesifikasi jaring lingkar kapal KM. Mina Makmur 08 sudah kami upload.", time: "13:40" },
                { type: "text", sender: "them", text: "Siap Pak Hendra, hasil pemeriksaan kesesuaian fisik armada dan spesifikasi alat tangkap dinyatakan memenuhi standar ramah lingkungan.", time: "14:14" },
                { 
                    type: "link", 
                    sender: "them", 
                    title: "Berita Acara Pemeriksaan Teknis Fisik Kapal (BAP)", 
                    url: "https://silat.kkp.go.id/dokumen/verifikasi/bap-teknis-008", 
                    time: "14:14" 
                }
            ]
        },
        {
            id: "syahbandar-muara-baru",
            name: "Syahbandar Muara Baru",
            fullName: "Syahbandar Perikanan (PPS Muara Baru)",
            roleTitle: "Penerbitan SPB & Kelaikan Kapal Pangkalan PPS Muara Baru",
            avatarChar: "S",
            avatarBg: "#2563eb",
            time: "today, 14:10",
            lastMsg: "Surat Persetujuan Berlayar (SPB) siap...",
            lastMsgPrefix: "↵ ",
            tag: "SPB & Sandar",
            status: "Assigned",
            unread: 0,
            messages: [
                { type: "text", sender: "me", text: "Lapor Pak Syahbandar, armada KM. Bahari Nusantara telah menyelesaikan pengisian BBM dan perbekalan. Kami bermaksud memohon penerbitan Surat Persetujuan Berlayar (SPB).", time: "14:02" },
                { type: "text", sender: "them", text: "Baik Pak Hendra, seluruh dokumen kelaikan, sertifikat BST awak kapal, dan bukti lapor keberangkatan telah lengkap. Surat Persetujuan Berlayar (SPB) siap dicetak dan diambil di loket pangkalan.", time: "14:10" }
            ]
        },
        {
            id: "admin-rumpon",
            name: "Admin Izin Rumpon (SIPR)",
            fullName: "Admin Pengelolaan & Alokasi Rumpon",
            roleTitle: "Direktorat Pengelolaan Sumber Daya Ikan - Ditjen Perikanan Tangkap",
            avatarChar: "R",
            avatarBg: "#2563eb",
            time: "today, 14:01",
            lastMsg: "Titik koordinat alokasi rumpon WPP 711...",
            lastMsgPrefix: "↵ ",
            tag: "Izin Rumpon",
            status: "Assigned",
            unread: 0,
            messages: [
                { type: "text", sender: "me", text: "Selamat siang Admin Rumpon, kami mengajukan izin pemasangan 4 unit rumpon perairan laut dalam di WPPNRI 711. Apakah koordinat penempatannya sudah diverifikasi?", time: "13:45" },
                { type: "text", sender: "them", text: "Selamat siang Pak Hendra. Titik koordinat alokasi rumpon WPP 711 telah diverifikasi aman, tidak tumpang tindih dengan koridor pelayaran kapal niaga, dan kuota zona rumpon masih tersedia.", time: "14:01" }
            ]
        },
        {
            id: "pengawas-psdkp",
            name: "Pengawas PSDKP",
            fullName: "Petugas Pengawas Pangkalan PSDKP",
            roleTitle: "Direktorat Jenderal Pengawasan Sumber Daya Kelautan dan Perikanan",
            avatarChar: "P",
            avatarBg: "#2563eb",
            time: "today, 13:31",
            lastMsg: "Penerbitan SLO dinyatakan lengkap...",
            lastMsgPrefix: "ⓘ ",
            tag: "SLO & VMS",
            status: "Resolved",
            unread: 0,
            messages: [
                { type: "text", sender: "me", text: "Selamat siang, kami menanyakan status aktivasi transmitter VMS dan penerbitan Surat Laik Operasi (SLO) kapal KM. Samudra Berkah 02.", time: "13:10" },
                { type: "text", sender: "them", text: "Sinyal transmitter VMS terdeteksi aktif normal di Fishing Monitoring Center (FMC). Penerbitan SLO dinyatakan lengkap & tertib regulasi.", time: "13:25" },
                { type: "text", sender: "them", text: "Conversation has been resolved by PSDKP Officer.", time: "13:31" }
            ]
        },
        {
            id: "billing-simponi",
            name: "Helpdesk Billing & PNBP",
            fullName: "Helpdesk Billing SIMPONI & PNBP",
            roleTitle: "Layanan Penerimaan Negara Bukan Pajak (PNBP) Sektor Perikanan",
            avatarChar: "B",
            avatarBg: "#2563eb",
            time: "today, 13:27",
            lastMsg: "Kode billing pembayaran PNBP telah terlunasi...",
            lastMsgPrefix: "ⓘ ",
            tag: "Billing & PNBP",
            status: "Resolved",
            unread: 0,
            messages: [
                { type: "text", sender: "me", text: "Halo Admin Billing, bukti transfer pelunasan tagihan PNBP Pascaproduksi melalui Bank Persepsi sudah kami unggah.", time: "13:15" },
                { type: "text", sender: "them", text: "Data pembayaran dengan NTPN telah terkonfirmasi otomatis di sistem SIMPONI Kementerian Keuangan. Tagihan dinyatakan LUNAS.", time: "13:22" },
                { type: "text", sender: "them", text: "Conversation has been marked as completed.", time: "13:27" }
            ]
        },
        {
            id: "dkp-daerah",
            name: "Dinas Kelautan Daerah",
            fullName: "Dinas Kelautan & Perikanan Provinsi",
            roleTitle: "Seksi Pembinaan Usaha & Rekomendasi Alokasi Perikanan Tangkap Daerah",
            avatarChar: "D",
            avatarBg: "#2563eb",
            time: "kemarin",
            lastMsg: "Surat rekomendasi alokasi daerah telah...",
            lastMsgPrefix: "↵ ",
            tag: "Rekomendasi",
            status: "Resolved",
            unread: 0,
            messages: [
                { type: "text", sender: "me", text: "Selamat pagi Bapak/Ibu DKP, mohon info apakah surat rekomendasi alokasi daerah untuk armada penangkap ikan kami sudah diterbitkan?", time: "Kemarin 10:00" },
                { type: "text", sender: "them", text: "Selamat pagi Pak Hendra. Surat rekomendasi alokasi daerah telah selesai ditandatangani dan diunggah ke integrasi basis data SILAT KKP.", time: "Kemarin 10:30" }
            ]
        }
    ];

    window.activeContactId = null;
    let currentFilter = "all";

    function escapeHtml(string) {
        if (!string) return '';
        const div = document.createElement('div');
        div.innerText = string;
        return div.innerHTML;
    }

    function scrollToBottom() {
        const chatContent = document.getElementById('main-chat-content');
        if (!chatContent) return;
        setTimeout(() => {
            chatContent.scrollTop = chatContent.scrollHeight;
        }, 40);
    }

    // Modal Image Preview trigger
    window.previewImageModal = function(src) {
        const imgTarget = document.getElementById('modal-preview-img-target');
        if (imgTarget) {
            imgTarget.src = src;
            const modalEl = document.getElementById('modalImagePreview');
            if (modalEl && typeof bootstrap !== 'undefined') {
                const modal = new bootstrap.Modal(modalEl);
                modal.show();
            }
        }
    };

    // Render Contact List in Left Pane
    function renderContactList() {
        const container = document.getElementById('chat-conversation-list');
        if (!container) return;

        let filtered = window.chatContacts;
        if (currentFilter === "unread") {
            filtered = window.chatContacts.filter(c => c.unread > 0);
        } else if (currentFilter === "assigned") {
            filtered = window.chatContacts.filter(c => c.status === "Assigned");
        } else if (currentFilter === "resolved") {
            filtered = window.chatContacts.filter(c => c.status === "Resolved");
        }

        let html = "";
        filtered.forEach(contact => {
            const isActive = (contact.id === window.activeContactId);
            const statusClass = (contact.status === "Resolved") 
                ? "chat-status-resolved" 
                : (contact.status === "Assigned" ? "chat-status-assigned" : "chat-status-open");

            html += `
                <a href="javascript:void(0);" class="chat-item-row ${isActive ? 'active' : ''}" data-id="${contact.id}" onclick="openChatRoom('${contact.id}')">
                    <div class="d-flex align-items-start gap-2">
                        <div class="chat-avatar-icon" style="background-color: ${contact.avatarBg};">
                            <span>${escapeHtml(contact.avatarChar)}</span>
                        </div>
                        <div class="flex-fill min-w-0">
                            <div class="d-flex justify-content-between align-items-center mb-1">
                                <span class="fw-semibold text-truncate fs-13 text-dark d-block">${escapeHtml(contact.name)}</span>
                                <span class="text-muted fs-11 flex-shrink-0 ms-1">${escapeHtml(contact.time)}</span>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mb-1">
                                <span class="chat-preview-text flex-fill pe-2">
                                    <span class="text-muted">${escapeHtml(contact.lastMsgPrefix)}</span>${escapeHtml(contact.lastMsg)}
                                </span>
                                ${contact.unread > 0 ? `<span class="badge bg-danger rounded-circle p-1 fs-10" style="min-width: 18px; height: 18px; line-height: 10px;">${contact.unread}</span>` : ''}
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="chat-tag-label">${escapeHtml(contact.tag)}</span>
                                <span class="${statusClass}">${escapeHtml(contact.status)}</span>
                            </div>
                        </div>
                    </div>
                </a>
            `;
        });

        if (filtered.length === 0) {
            html = `<div class="p-4 text-center text-muted fs-12">Tidak ada layanan percakapan ditemukan.</div>`;
        }

        container.innerHTML = html;
    }

    // Build Individual Bubble HTML
    function buildBubbleHtml(item, contact) {
        const isMe = (item.sender === "me");
        const senderName = isMe ? "Anda (Pelaku Usaha)" : (contact.fullName || contact.name);
        const timeHtml = isMe 
            ? `<span class="msg-sent-time"><span class="chat-read-mark align-middle"><i class="ri-check-double-line text-primary"></i></span>${escapeHtml(item.time)}</span> Anda`
            : `<span class="fw-semibold text-dark fs-12">${escapeHtml(senderName)}</span> <span class="msg-sent-time ms-2">${escapeHtml(item.time)}</span>`;

        let contentHtml = "";

        if (item.type === "image") {
            contentHtml = `
                <div class="p-1 bg-white border rounded">
                    <img src="${item.src}" alt="Berkas Lampiran" class="chat-bubble-image rounded" onclick="previewImageModal('${item.src}')">
                    ${item.caption ? `<p class="mt-2 mb-0 px-2 pb-1 fs-12 text-dark">${escapeHtml(item.caption)}</p>` : ''}
                </div>
            `;
        } else if (item.type === "link") {
            contentHtml = `
                <div class="chat-bubble-link-card p-3 border rounded bg-white shadow-sm">
                    <div class="d-flex align-items-center gap-2 mb-2">
                        <span class="avatar avatar-sm bg-primary-transparent text-primary rounded flex-shrink-0">
                            <i class="ri-links-line fs-14"></i>
                        </span>
                        <span class="fw-semibold fs-13 text-dark text-truncate">${escapeHtml(item.title || 'Tautan Web')}</span>
                    </div>
                    <a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer" class="text-primary fs-12 text-break d-block text-decoration-underline">
                        <i class="ri-external-link-line me-1"></i>${escapeHtml(item.url)}
                    </a>
                </div>
            `;
        } else {
            contentHtml = `
                <div>
                    <p class="mb-0">${escapeHtml(item.text)}</p>
                </div>
            `;
        }

        if (isMe) {
            return `
                <li class="chat-item-end">
                    <div class="chat-list-inner">
                        <div class="me-3">
                            <span class="chatting-user-info d-inline-flex align-items-center">
                                ${timeHtml}
                            </span>
                            <div class="main-chat-msg">
                                ${contentHtml}
                            </div>
                        </div>
                        <div class="chat-user-profile flex-shrink-0">
                            <span class="avatar avatar-md avatar-rounded">
                                <img src="../assets/images/faces/9.jpg" alt="Ir. H. Hendra Wijaya">
                            </span>
                        </div>
                    </div>
                </li>
            `;
        } else {
            return `
                <li class="chat-item-start">
                    <div class="chat-list-inner">
                        <div class="chat-user-profile flex-shrink-0">
                            <div class="chat-avatar-icon" style="background-color: ${contact.avatarBg}; width: 34px; height: 34px; font-size: 0.8rem;">
                                <span>${escapeHtml(contact.avatarChar)}</span>
                            </div>
                        </div>
                        <div class="ms-3">
                            <span class="chatting-user-info d-inline-flex align-items-center">
                                ${timeHtml}
                            </span>
                            <div class="main-chat-msg">
                                ${contentHtml}
                            </div>
                        </div>
                    </div>
                </li>
            `;
        }
    }

    // Open & Render Specific Roomchat
    window.openChatRoom = function(contactId) {
        const contact = window.chatContacts.find(c => c.id === contactId);
        if (!contact) return;

        window.activeContactId = contactId;
        contact.unread = 0; // Mark as read

        // Update Left List active class
        renderContactList();

        // Switch from Empty State to Active Roomchat
        const emptyView = document.getElementById('chat-empty-view');
        const activeView = document.getElementById('chat-active-view');
        const cardContainer = document.querySelector('.chat-unified-card');

        if (emptyView) emptyView.classList.add('d-none');
        if (activeView) {
            activeView.classList.remove('d-none');
            activeView.classList.add('d-flex');
        }
        if (cardContainer) {
            cardContainer.classList.add('chat-mobile-open');
        }

        // Populate Header info
        const nameEl = document.getElementById('room-contact-name');
        const tagEl = document.getElementById('room-contact-tag');
        const statusEl = document.getElementById('room-contact-status');
        const subtitleEl = document.getElementById('room-contact-subtitle');
        const avatarCharEl = document.getElementById('room-avatar-char');
        const avatarBox = document.getElementById('room-avatar');

        if (nameEl) nameEl.innerText = contact.fullName || contact.name;
        if (tagEl) tagEl.innerText = contact.tag;
        if (subtitleEl) subtitleEl.innerText = contact.roleTitle || "Layanan Komunikasi Perizinan KKP";
        if (statusEl) {
            statusEl.innerText = contact.status;
            statusEl.className = (contact.status === "Resolved") 
                ? "badge bg-success-transparent text-success fs-11" 
                : "badge bg-primary-transparent text-primary fs-11";
        }
        if (avatarCharEl) avatarCharEl.innerText = contact.avatarChar;
        if (avatarBox) avatarBox.style.backgroundColor = contact.avatarBg;

        // Render Message thread
        const ul = document.querySelector('#main-chat-content ul');
        if (ul) {
            let html = `
                <li class="chat-day-label">
                    <span>Hari Ini</span>
                </li>
            `;
            contact.messages.forEach(msg => {
                html += buildBubbleHtml(msg, contact);
            });
            ul.innerHTML = html;
            scrollToBottom();
        }
    };

    function showTypingIndicator(contact) {
        removeTypingIndicator();
        const ul = document.querySelector('#main-chat-content ul');
        if (!ul) return;

        const li = document.createElement('li');
        li.className = 'chat-item-start chat-typing-indicator';
        li.id = 'typingIndicator';
        li.innerHTML = `
            <div class="chat-list-inner">
                <div class="chat-user-profile flex-shrink-0">
                    <div class="chat-avatar-icon" style="background-color: ${contact.avatarBg}; width: 34px; height: 34px; font-size: 0.8rem;">
                        <span>${escapeHtml(contact.avatarChar)}</span>
                    </div>
                </div>
                <div class="ms-3">
                    <span class="chatting-user-info d-inline-flex align-items-center">
                        <span class="fw-semibold text-dark fs-12">${escapeHtml(contact.fullName || contact.name)}</span> <span class="text-muted fs-11 ms-2">sedang mengetik tanggapan...</span>
                    </span>
                    <div class="main-chat-msg">
                        <div class="bg-white border py-2 px-3">
                            <div class="d-flex align-items-center gap-1">
                                <span class="spinner-grow spinner-grow-sm text-primary" role="status" style="width: 6px; height: 6px;"></span>
                                <span class="spinner-grow spinner-grow-sm text-primary" role="status" style="width: 6px; height: 6px; animation-delay: 0.15s;"></span>
                                <span class="spinner-grow spinner-grow-sm text-primary" role="status" style="width: 6px; height: 6px; animation-delay: 0.3s;"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        ul.appendChild(li);
        scrollToBottom();
    }

    function removeTypingIndicator() {
        const el = document.getElementById('typingIndicator');
        if (el) el.remove();
    }

    // Contextual Smart Replies from Admin Perizinan to Nelayan/Pelaku Usaha
    function generateSmartReply(contact, userMessage, type) {
        if (type === "image") {
            return "Berkas visual / dokumen kapal yang Bapak kirimkan telah kami terima dan kami lampirkan ke sistem verifikasi permohonan.";
        }
        if (type === "link") {
            return "Tautan rujukan berkas telah berhasil kami buka dan kami catat dalam riwayat permohonan izin Anda. Terima kasih.";
        }

        const msg = (userMessage || "").toLowerCase();
        const contactId = contact.id;

        if (contactId === "helpdesk-kkp" || contactId === "verifikator-teknis") {
            if (msg.includes("sipi") || msg.includes("siup") || msg.includes("sikpi") || msg.includes("izin") || msg.includes("permohonan")) {
                return "Baik Pak Hendra, berkas permohonan perizinan kapal Anda telah kami verifikasi dan saat ini sedang ditindaklanjuti untuk penerbitan izin resmi.";
            }
            if (msg.includes("pnbp") || msg.includes("lps") || msg.includes("bayar") || msg.includes("simponi")) {
                return "Data pelunasan PNBP pascaproduksi Anda telah tervalidasi lunas di sistem terpadu SILAT KKP.";
            }
            if (msg.includes("kapan") || msg.includes("estimasi") || msg.includes("unduh") || msg.includes("download")) {
                return "Dokumen e-perizinan digital terbit dalam 1x24 jam kerja setelah verifikasi teknis dan tanda tangan elektronik tuntas.";
            }
        }

        if (contactId === "syahbandar-muara-baru") {
            if (msg.includes("spb") || msg.includes("layar") || msg.includes("berlayar")) {
                return "Surat Persetujuan Berlayar (SPB) dapat langsung diambil di loket pangkalan PPS Muara Baru setelah pengecekan fisik kelaikan selesai.";
            }
            if (msg.includes("sandar") || msg.includes("tambat") || msg.includes("dermaga") || msg.includes("labuh")) {
                return "Dermaga pangkalan siap melayani sandar armada kapal Bapak. Petugas jaga siap memandu proses tambat.";
            }
        }

        if (contactId === "admin-rumpon") {
            if (msg.includes("rumpon") || msg.includes("koordinat") || msg.includes("titik") || msg.includes("sipr")) {
                return "Verifikasi penempatan rumpon telah kami sesuaikan dengan zonasi alokasi WPPNRI aktif agar ramah lingkungan dan aman bagi jalur pelayaran.";
            }
        }

        if (contactId === "pengawas-psdkp") {
            if (msg.includes("slo") || msg.includes("vms") || msg.includes("transmitter")) {
                return "Data transmisi transmitter VMS kapal terpantau aktif di FMC Jakarta dan persyaratan penerbitan SLO telah lengkap.";
            }
        }

        if (msg.includes("terima kasih") || msg.includes("makasih") || msg.includes("siap") || msg.includes("ok") || msg.includes("baik")) {
            return "Sama-sama Pak Hendra, senang dapat melayani kebutuhan perizinan usaha perikanan Anda!";
        }

        if (msg.includes("halo") || msg.includes("selamat") || msg.includes("pagi") || msg.includes("siang")) {
            return `Selamat datang di ${contact.fullName || contact.name}. Silakan sampaikan pertanyaan atau permohonan konsultasi perizinan Anda.`;
        }

        return "Pesan telah diterima oleh admin perizinan. Kami akan segera menindaklanjuti proses koordinasi permohonan Anda.";
    }

    function handleSendTextMessage() {
        if (!window.activeContactId) return;
        const contact = window.chatContacts.find(c => c.id === window.activeContactId);
        if (!contact) return;

        const input = document.getElementById('chat-input');
        if (!input) return;

        const text = input.value.trim();
        if (!text) return;

        input.value = "";

        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const msgObj = {
            type: "text",
            sender: "me",
            text: text,
            time: timeStr
        };

        contact.messages.push(msgObj);
        contact.lastMsg = text;
        contact.lastMsgPrefix = "↵ ";
        contact.time = "today, " + timeStr;

        const ul = document.querySelector('#main-chat-content ul');
        if (ul) {
            ul.insertAdjacentHTML('beforeend', buildBubbleHtml(msgObj, contact));
            scrollToBottom();
        }

        renderContactList();
        triggerSimulatedReply(contact, text, "text");
    }

    function handleSendImage(imgSrc, caption) {
        if (!window.activeContactId) return;
        const contact = window.chatContacts.find(c => c.id === window.activeContactId);
        if (!contact) return;

        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const msgObj = {
            type: "image",
            sender: "me",
            src: imgSrc,
            caption: caption || "Dokumen/foto terlampir",
            time: timeStr
        };

        contact.messages.push(msgObj);
        contact.lastMsg = "terlampir gambar/dokumen";
        contact.lastMsgPrefix = "";
        contact.time = "today, " + timeStr;

        const ul = document.querySelector('#main-chat-content ul');
        if (ul) {
            ul.insertAdjacentHTML('beforeend', buildBubbleHtml(msgObj, contact));
            scrollToBottom();
        }

        renderContactList();
        triggerSimulatedReply(contact, "", "image");
    }

    function handleSendLink(linkTitle, linkUrl) {
        if (!window.activeContactId) return;
        const contact = window.chatContacts.find(c => c.id === window.activeContactId);
        if (!contact) return;

        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const msgObj = {
            type: "link",
            sender: "me",
            title: linkTitle || "Tautan Rujukan Dokumen",
            url: linkUrl,
            time: timeStr
        };

        contact.messages.push(msgObj);
        contact.lastMsg = linkTitle || linkUrl;
        contact.lastMsgPrefix = "🔗 ";
        contact.time = "today, " + timeStr;

        const ul = document.querySelector('#main-chat-content ul');
        if (ul) {
            ul.insertAdjacentHTML('beforeend', buildBubbleHtml(msgObj, contact));
            scrollToBottom();
        }

        renderContactList();
        triggerSimulatedReply(contact, "", "link");
    }

    function triggerSimulatedReply(contact, originalMsg, type) {
        const replyText = generateSmartReply(contact, originalMsg, type);

        setTimeout(() => {
            showTypingIndicator(contact);
        }, 400);

        setTimeout(() => {
            removeTypingIndicator();
            const replyNow = new Date();
            const replyTimeStr = replyNow.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            const replyObj = {
                type: "text",
                sender: "them",
                text: replyText,
                time: replyTimeStr
            };

            contact.messages.push(replyObj);
            contact.lastMsg = replyText;
            contact.lastMsgPrefix = "↵ ";
            contact.time = "today, " + replyTimeStr;

            const ul = document.querySelector('#main-chat-content ul');
            if (ul) {
                ul.insertAdjacentHTML('beforeend', buildBubbleHtml(replyObj, contact));
                scrollToBottom();
            }

            renderContactList();
        }, 1300);
    }

    // Filtering
    window.filterChats = function(filterType, label) {
        currentFilter = filterType;
        const filterText = document.getElementById('currentFilterText');
        if (filterText) filterText.innerText = label;
        renderContactList();
    };

    window.markAllAsRead = function() {
        window.chatContacts.forEach(c => c.unread = 0);
        renderContactList();
    };

    window.toggleFilterMode = function() {
        if (currentFilter === "all") {
            window.filterChats("assigned", "Assigned");
        } else if (currentFilter === "assigned") {
            window.filterChats("resolved", "Resolved");
        } else {
            window.filterChats("all", "Newest");
        }
    };

    function attachChatEvents() {
        // Send button
        const sendBtn = document.getElementById('btn-chat-send');
        if (sendBtn) {
            sendBtn.onclick = (e) => {
                e.preventDefault();
                handleSendTextMessage();
            };
        }

        // Enter key
        const chatInput = document.getElementById('chat-input');
        if (chatInput) {
            chatInput.onkeydown = (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSendTextMessage();
                }
            };
        }

        // Image file input
        const sendImgBtn = document.getElementById('btn-send-image');
        const imgFileInput = document.getElementById('chat-image-file-input');
        if (sendImgBtn && imgFileInput) {
            sendImgBtn.onclick = () => {
                imgFileInput.click();
            };

            imgFileInput.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function (event) {
                        handleSendImage(event.target.result, file.name);
                    };
                    reader.readAsDataURL(file);
                }
                imgFileInput.value = "";
            };
        }

        // Link modal confirmation
        const confirmSendLinkBtn = document.getElementById('btn-confirm-send-link');
        const inputLinkTitle = document.getElementById('input-link-title');
        const inputLinkUrl = document.getElementById('input-link-url');
        const modalSendLinkEl = document.getElementById('modalSendLink');

        if (confirmSendLinkBtn && inputLinkUrl) {
            confirmSendLinkBtn.onclick = () => {
                const url = inputLinkUrl.value.trim();
                const title = inputLinkTitle ? inputLinkTitle.value.trim() : "";

                if (!url) {
                    inputLinkUrl.classList.add('is-invalid');
                    inputLinkUrl.focus();
                    return;
                }
                inputLinkUrl.classList.remove('is-invalid');

                let validUrl = url;
                if (!validUrl.startsWith('http://') && !validUrl.startsWith('https://')) {
                    validUrl = 'https://' + validUrl;
                }

                handleSendLink(title, validUrl);

                if (inputLinkTitle) inputLinkTitle.value = "";
                inputLinkUrl.value = "";
                if (modalSendLinkEl && typeof bootstrap !== 'undefined') {
                    const modal = bootstrap.Modal.getInstance(modalSendLinkEl);
                    if (modal) modal.hide();
                }
            };
        }

        // Clear chat button
        const clearChatBtn = document.getElementById('btn-clear-chat');
        if (clearChatBtn) {
            clearChatBtn.onclick = () => {
                if (!window.activeContactId) return;
                const contact = window.chatContacts.find(c => c.id === window.activeContactId);
                if (!contact) return;

                contact.messages = [
                    { type: "text", sender: "them", text: `Riwayat percakapan telah dibersihkan. Silakan sampaikan permohonan atau pertanyaan baru kepada ${contact.fullName || contact.name}.`, time: "Baru saja" }
                ];
                contact.lastMsg = "Riwayat percakapan dibersihkan";
                contact.lastMsgPrefix = "ⓘ ";
                contact.time = "today, baru saja";

                const ul = document.querySelector('#main-chat-content ul');
                if (ul) {
                    let html = `
                        <li class="chat-day-label">
                            <span>Hari Ini</span>
                        </li>
                    `;
                    contact.messages.forEach(msg => {
                        html += buildBubbleHtml(msg, contact);
                    });
                    ul.innerHTML = html;
                }
                renderContactList();
            };
        }

        // Mobile back button
        const backBtn = document.getElementById('btn-back-to-list');
        if (backBtn) {
            backBtn.onclick = () => {
                const cardContainer = document.querySelector('.chat-unified-card');
                if (cardContainer) {
                    cardContainer.classList.remove('chat-mobile-open');
                }
            };
        }
    }

    // Initial boot
    attachChatEvents();
    renderContactList();

    // Check URL parameters if direct contact requested
    const urlParams = new URLSearchParams(window.location.search);
    const contactParam = urlParams.get('contact');
    if (contactParam) {
        const found = window.chatContacts.find(c => (c.name.toLowerCase().includes(contactParam.toLowerCase()) || (c.fullName && c.fullName.toLowerCase().includes(contactParam.toLowerCase()))));
        if (found) {
            openChatRoom(found.id);
        }
    }

})();