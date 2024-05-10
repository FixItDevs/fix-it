package org.example;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.time.Duration;

import static org.junit.jupiter.api.Assertions.*;
import java.io.File;
import org.openqa.selenium.OutputType;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.TakesScreenshot;

public class MainFeed1500pxTest {
    private static ChromeDriver driver;
    private static MainFeedPage mainFeedPage;
    private static Navbar navbar;

    @BeforeAll
    static void launchBrowser() {
        WebDriverManager.chromedriver().setup();
        ChromeOptions options = new ChromeOptions();

        // Workaround: Chrome only working in GH Actions if running in headless mode
        if(System.getenv("CI") != null) {
            options.addArguments("--headless", "--no-sandbox", "--disable-dev-shm-usage");
        }

        driver = new ChromeDriver(options);
        mainFeedPage = new MainFeedPage(driver);
        navbar = new Navbar(driver);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(1));
    }

    @BeforeEach
    void loadMainFeedPage() {
        mainFeedPage.navigate("local", "large");
    }

//    @Test
//    void testTextOfNavbarTitle() {
//        String element = navbar.getNavElementText("navTitle");
//        assertEquals("MUI", element);
//    }
    @DisplayName("Test of main column sections")
    @ParameterizedTest(name = "Test presence of {0} column")
    @CsvSource({
            "categorySelectorOuterContainer",
//            "postFeedOuterContainer",
//            "rightColumnOuterContainer",
    })
    void testPresenceOfMainColumnSections(String identifier) {
        // Arrange
        boolean isPresent = mainFeedPage.checkPresenceOfElement(identifier);
        // Assert
        assertTrue(isPresent);
    }

    @AfterEach
    void clearStorage() {
        driver.navigate().refresh();
    }

    @AfterAll
    static void closeBrowser() {
        driver.quit();
    }

    // Helper function for taking screenshots using WebDriver
    public static void takeScreenshot(ChromeDriver driver, String desiredPath) throws Exception {
        TakesScreenshot screenshot = ((TakesScreenshot)driver);
        File screenshotFile = screenshot.getScreenshotAs(OutputType.FILE);
        File targetFile = new File(desiredPath);
        FileUtils.copyFile(screenshotFile, targetFile);
    }
}
