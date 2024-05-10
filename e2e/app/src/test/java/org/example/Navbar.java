package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class Navbar {
    protected WebDriver driver;
    private final By navOuterContainerBy = By.cssSelector("div[class='css-i9gxme']");

    public Navbar(WebDriver driver) {
        this.driver = driver;
    }

    public By getElementBy(String identifier) {
        return switch (identifier) {
            case "navOuterContainer" -> navOuterContainerBy;

            default -> throw new IllegalArgumentException("Invalid identifier: " + identifier);
        };
    }
    public void hoverOverElement(String identifier) {
        WebElement image = driver.findElement(getElementBy(identifier));
        Actions actions = new Actions(driver);
        actions.moveToElement(image).build().perform();
    }
    public Boolean checkNavElementPresence(String identifier) {
        return driver.findElement(getElementBy(identifier)).isDisplayed();
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
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(3));
        wait.until(ExpectedConditions.presenceOfElementLocated(getElementBy(identifier)));
        try {
            WebElement element = driver.findElement(getElementBy(identifier));
            return element.isDisplayed();
        } catch (NoSuchElementException e) {
            return false;
        }
    }
    public String getNavElementText(String identifier) {
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(3));
        wait.until(ExpectedConditions.presenceOfElementLocated(getElementBy(identifier)));
        WebElement element = driver.findElement(getElementBy(identifier));
        return element.getText();
    }
    public void clickNavLink(String identifier) {
        driver.findElement(getElementBy(identifier)).click();
    }

}

