package com.tung.wordnest

import com.tung.wordnest.ui.screens.toeic.DiffChecker
import com.tung.wordnest.ui.screens.toeic.DiffType
import org.json.JSONObject
import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertNotNull
import org.junit.Assert.assertTrue
import org.junit.Test
import java.io.File

class IntensiveListeningTest {

    @Test
    fun testDiffCheckerPerfectMatch() {
        val target = "Where is the meeting room located?"
        val user = "Where is the meeting room located?"
        val (diffs, accuracy) = DiffChecker.calculateDiff(user, target)

        assertEquals(100, accuracy)
        assertTrue(diffs.all { it.type == DiffType.CORRECT })
        assertEquals(6, diffs.size)
    }

    @Test
    fun testDiffCheckerCaseAndPunctuationInsensitive() {
        val target = "Please submit the report by Friday."
        val user = "please SUBMIT the REPORT by friday"
        val (diffs, accuracy) = DiffChecker.calculateDiff(user, target)

        assertEquals(100, accuracy)
        assertTrue(diffs.all { it.type == DiffType.CORRECT })
    }

    @Test
    fun testDiffCheckerPartialMatch() {
        val target = "She is walking to the train station"
        val user = "She is running to train station"
        val (diffs, accuracy) = DiffChecker.calculateDiff(user, target)

        assertTrue(accuracy in 40..85)
        assertTrue(diffs.any { it.type == DiffType.INCORRECT })
    }

    @Test
    fun testDiffCheckerHintNextWord() {
        val target = "The annual sales conference will begin on Monday"
        val currentInput = "The annual"
        val hint = DiffChecker.getNextHint(currentInput, target)

        assertEquals("The annual sales ", hint)
    }

    @Test
    fun testAll30IntensiveJsonAssetsExistAndValid() {
        val baseDir = File("src/main/assets/toeic/intensive")
        assertTrue("Intensive directory must exist", baseDir.exists())

        for (year in listOf(2026, 2024, 2023)) {
            for (num in 1..10) {
                val file = File(baseDir, "test_${year}_$num.json")
                assertTrue("File test_${year}_$num.json must exist", file.exists())
                assertTrue("File test_${year}_$num.json must not be empty", file.length() > 500)

                val text = file.readText()
                assertTrue("Must contain audioSrc", text.contains("\"audioSrc\":"))
                assertTrue("Must contain transcript", text.contains("\"transcript\":"))
                assertTrue("Must contain questions", text.contains("\"questions\":"))
            }
        }
    }
}
