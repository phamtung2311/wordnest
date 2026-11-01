package com.tung.wordnest

import com.tung.wordnest.ui.screens.toeic.ToeicAssets
import com.tung.wordnest.ui.screens.toeic.ToeicScoreConverter
import org.junit.Assert.assertEquals
import org.junit.Assert.assertNotNull
import org.junit.Assert.assertTrue
import org.junit.Test
import java.io.File

class ToeicGradingTest {

    @Test
    fun testReadingScoreConverter() {
        // Kiểm tra thang điểm Reading ETS (0 - 100 raw score -> 5 - 495)
        assertEquals(5, ToeicScoreConverter.getReadingToeicScore(0))
        assertEquals(5, ToeicScoreConverter.getReadingToeicScore(5))
        assertEquals(10, ToeicScoreConverter.getReadingToeicScore(10))
        assertEquals(60, ToeicScoreConverter.getReadingToeicScore(20))
        assertEquals(110, ToeicScoreConverter.getReadingToeicScore(30))
        assertEquals(175, ToeicScoreConverter.getReadingToeicScore(40))
        assertEquals(245, ToeicScoreConverter.getReadingToeicScore(50))
        assertEquals(305, ToeicScoreConverter.getReadingToeicScore(60))
        assertEquals(360, ToeicScoreConverter.getReadingToeicScore(70))
        assertEquals(415, ToeicScoreConverter.getReadingToeicScore(80))
        assertEquals(465, ToeicScoreConverter.getReadingToeicScore(90))
        assertEquals(495, ToeicScoreConverter.getReadingToeicScore(100))
    }

    @Test
    fun testListeningScoreConverter() {
        // Kiểm tra thang điểm Listening ETS (0 - 100 raw score -> 5 - 495)
        assertEquals(5, ToeicScoreConverter.getListeningToeicScore(0))
        assertEquals(5, ToeicScoreConverter.getListeningToeicScore(5))
        assertEquals(25, ToeicScoreConverter.getListeningToeicScore(10))
        assertEquals(75, ToeicScoreConverter.getListeningToeicScore(20))
        assertEquals(130, ToeicScoreConverter.getListeningToeicScore(30))
        assertEquals(190, ToeicScoreConverter.getListeningToeicScore(40))
        assertEquals(245, ToeicScoreConverter.getListeningToeicScore(50))
        assertEquals(310, ToeicScoreConverter.getListeningToeicScore(60))
        assertEquals(370, ToeicScoreConverter.getListeningToeicScore(70))
        assertEquals(430, ToeicScoreConverter.getListeningToeicScore(80))
        assertEquals(485, ToeicScoreConverter.getListeningToeicScore(90))
        assertEquals(495, ToeicScoreConverter.getListeningToeicScore(100))
    }

    @Test
    fun testUrlGenerators() {
        assertEquals(
            "https://wordnest-english-vocab.web.app/tests/reading2023_1.pdf",
            ToeicAssets.getToeicReadingPdfUrl("2023_1")
        )
        assertEquals(
            "https://wordnest-english-vocab.web.app/tests/reading2024_10.pdf",
            ToeicAssets.getToeicReadingPdfUrl("2024_10")
        )
        assertEquals(
            "https://wordnest-english-vocab.web.app/audio/test1_2023.mp3",
            ToeicAssets.getToeicAudioUrl("2023_1")
        )
        assertEquals(
            "https://wordnest-english-vocab.web.app/audio/test10_2024.mp3",
            ToeicAssets.getToeicAudioUrl("2024_10")
        )
    }

    @Test
    fun testReadingAnswerKeyAsset() {
        val file = File("src/main/assets/toeic/answers_reading.json")
        assertTrue("File answers_reading.json must exist in assets", file.exists())
        val text = file.readText()

        for (year in listOf(2023, 2024)) {
            for (i in 1..10) {
                val testId = "${year}_$i"
                assertTrue("Reading must contain test $testId", text.contains("\"$testId\""))
                // Kiểm tra câu 101 và câu 200 có trong file cho đề này
                assertTrue("Reading $testId must contain question 101", text.contains("\"101\":"))
                assertTrue("Reading $testId must contain question 200", text.contains("\"200\":"))
            }
        }
    }

    @Test
    fun testListeningAnswerKeyAsset() {
        val file = File("src/main/assets/toeic/answers_listening.json")
        assertTrue("File answers_listening.json must exist in assets", file.exists())
        val text = file.readText()

        for (year in listOf(2023, 2024)) {
            for (i in 1..10) {
                val testId = "${year}_$i"
                assertTrue("Listening must contain test $testId", text.contains("\"$testId\""))
                assertTrue("Listening $testId must contain question 1", text.contains("\"1\":"))
                assertTrue("Listening $testId must contain question 100", text.contains("\"100\":"))
            }
        }
    }

    @Test
    fun testReadingPilotJsonValidation() {
        val file = File("src/main/assets/toeic/texts/reading_2024_1.json")
        assertTrue("File reading_2024_1.json must exist in assets/toeic/texts/", file.exists())
        val text = file.readText()

        // 1. Kiểm tra 100 câu từ 101 đến 200 đều có mặt
        for (q in 101..200) {
            assertTrue("Reading pilot must contain question $q", text.contains("\"num\": $q"))
        }

        // 2. Kiểm tra các blocks Part 6 (b_131_134, b_135_138, b_139_142, b_143_146)
        assertTrue("Must contain block for Q131-134", text.contains("\"id\": \"b_131_134\""))
        assertTrue("Must contain block for Q135-138", text.contains("\"id\": \"b_135_138\""))
        assertTrue("Must contain block for Q139-142", text.contains("\"id\": \"b_139_142\""))
        assertTrue("Must contain block for Q143-146", text.contains("\"id\": \"b_143_146\""))

        // 3. Kiểm tra các blocks Part 7 tiêu biểu (thư, email, schedule, brochure)
        assertTrue("Must contain block for Q147-148", text.contains("\"id\": \"b_147_148\""))
        assertTrue("Must contain block for Q149-150", text.contains("\"id\": \"b_149_150\""))
        assertTrue("Must contain block for Q196-200", text.contains("\"id\": \"b_196_200\""))

        // 4. Kiểm tra metadata đề thi
        assertTrue("Must have testId 2024_1", text.contains("\"testId\": \"2024_1\""))
        assertTrue("Must have title ETS 2024", text.contains("\"title\": \"ETS 2024 · Test 1\""))
    }
}
