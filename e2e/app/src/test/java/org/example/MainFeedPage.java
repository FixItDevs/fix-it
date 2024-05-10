package org.example;

import java.time.Duration;
import org.openqa.selenium.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class MainFeedPage {
    protected WebDriver driver;
    private final By categorySelectorOuterContainerBy = By.cssSelector("div[class='categories-selector-wrapper']");
    private final By postFeedOuterContainerBy = By.cssSelector("div[class='feed-column-wrapper']");
    private final By rightColumnOuterContainerBy = By.cssSelector("div[class='signup-benefits-wrapper']");



    public MainFeedPage(WebDriver driver) {
        this.driver = driver;
    }

    public int getScreenWidth(String screenSize) {
        return switch (screenSize) {
            case "large" -> 1464;
            case "medium" -> 910;
            case "small" -> 500;

            default -> throw new IllegalArgumentException("Invalid screenSize value: " + screenSize);
        };
    }
    public String getPageUrl(String localOrDeployed) {
        return switch (localOrDeployed) {
            case "local" -> "http://localhost:5173";
            case "deployed" -> "http://localhost:5173";

            default -> throw new IllegalArgumentException("Invalid localOrDeployed value: " + localOrDeployed);
        };
    }

    public void navigate(String localOrDeployed, String numOfColumns) {
        driver.get(getPageUrl(localOrDeployed));
        driver.manage().window().setSize(new Dimension(getScreenWidth(numOfColumns), 936));
    }
    public String getPageTitle() {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(3));
        wait.until(ExpectedConditions.titleIs("FixIt"));
        return driver.getTitle();
    }
    public By getElementBy(String identifier) {
        return switch (identifier) {
            case "categorySelectorOuterContainer" -> categorySelectorOuterContainerBy;
            case "postFeedOuterContainer" -> postFeedOuterContainerBy;
            case "rightColumnOuterContainer" -> rightColumnOuterContainerBy;

            default -> throw new IllegalArgumentException("Invalid identifier: " + identifier);
        };
    }
    public void hoverOverElement(String identifier) {
        WebElement image = driver.findElement(getElementBy(identifier));
        Actions actions = new Actions(driver);
        actions.moveToElement(image).build().perform();
    }
    public boolean checkPresenceOfElement(String identifier) {
        try {
            WebElement element = driver.findElement(getElementBy(identifier));
            return element.isDisplayed();
        } catch (NoSuchElementException e) {
            return false;
        }
    }
    public boolean checkPresenceOfExpectedElement(String identifier) {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(1));
        wait.until(ExpectedConditions.presenceOfElementLocated(getElementBy(identifier)));

        try {
            WebElement element = driver.findElement(getElementBy(identifier));
            return element.isDisplayed();
        } catch (NoSuchElementException e) {
            return false;
        }
    }
    public String getElementText(String identifier) {
        WebElement element = driver.findElement(getElementBy(identifier));
        return element.getText();
    }
    public void clickElement(String identifier) {
        driver.findElement(getElementBy(identifier)).click();
    }

    public void waitForElementToNotBePresent(String identifier) {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(2));
        wait.until(ExpectedConditions.invisibilityOfElementLocated(getElementBy(identifier)));
    }
}