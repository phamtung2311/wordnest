package com.tung.wordnest.data.repository

import com.tung.wordnest.data.local.DeckEntity
import com.tung.wordnest.data.local.WordEntity

object SampleData {
    val defaultDeck = DeckEntity(
        id = 1,
        name = "TOEIC Essential 600",
        emoji = "🎯",
        description = "Bộ từ vựng trọng tâm hay xuất hiện nhất trong đề thi TOEIC"
    )

    fun getInitialWords(deckId: Long): List<WordEntity> {
        val now = System.currentTimeMillis()
        return listOf(
            WordEntity(
                deckId = deckId,
                term = "Accommodate",
                meaning = "Cung cấp chỗ ở; đáp ứng nhu cầu",
                phonetic = "/əˈkɑː.mə.deɪt/",
                example = "The hotel can accommodate up to 500 guests for the conference.",
                level = "NEW",
                nextReviewTime = now
            ),
            WordEntity(
                deckId = deckId,
                term = "Implement",
                meaning = "Triển khai, thực thi, áp dụng",
                phonetic = "/ˈɪm.plə.ment/",
                example = "The management decided to implement a new remote work policy.",
                level = "NEW",
                nextReviewTime = now
            ),
            WordEntity(
                deckId = deckId,
                term = "Negotiate",
                meaning = "Đàm phán, thương lượng",
                phonetic = "/nəˈɡoʊ.ʃi.eɪt/",
                example = "We need to negotiate the contract terms before signing.",
                level = "NEW",
                nextReviewTime = now
            ),
            WordEntity(
                deckId = deckId,
                term = "Collaborate",
                meaning = "Hợp tác, cộng tác làm việc cùng nhau",
                phonetic = "/kəˈlæb.ə.reɪt/",
                example = "The engineering and marketing teams must collaborate closely.",
                level = "NEW",
                nextReviewTime = now
            ),
            WordEntity(
                deckId = deckId,
                term = "Anticipate",
                meaning = "Dự đoán, lường trước",
                phonetic = "/ænˈtɪs.ə.peɪt/",
                example = "We anticipate a surge in sales during the holiday promotion.",
                level = "NEW",
                nextReviewTime = now
            ),
            WordEntity(
                deckId = deckId,
                term = "Comprehensive",
                meaning = "Toàn diện, bao quát",
                phonetic = "/ˌkɑːm.prəˈhen.sɪv/",
                example = "The company conducted a comprehensive audit of its financial records.",
                level = "NEW",
                nextReviewTime = now
            ),
            WordEntity(
                deckId = deckId,
                term = "Designate",
                meaning = "Chỉ định, bổ nhiệm, định rõ",
                phonetic = "/ˈdez.ɪɡ.neɪt/",
                example = "She was designated as the team lead for the mobile project.",
                level = "NEW",
                nextReviewTime = now
            ),
            WordEntity(
                deckId = deckId,
                term = "Facilitate",
                meaning = "Tạo điều kiện, làm cho dễ dàng hơn",
                phonetic = "/fəˈsɪl.ə.teɪt/",
                example = "Modern software tools facilitate effective teamwork across timezones.",
                level = "NEW",
                nextReviewTime = now
            )
        )
    }
}
