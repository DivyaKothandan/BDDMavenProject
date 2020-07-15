package stepDefinitons;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GoogleSteps {
	WebDriver driver;
	
	@Given("^Launch Browser$")
	public void launchBrowser() {
		System.setProperty("webdriver.chrome.driver", "D://Drivers//Chromedriver.exe");
		 driver= new ChromeDriver();		
		driver.manage().window().maximize();
		
	}
	
	@When("^Launch Google Application$")
	public void launchURL(){
		driver.get("https://www.google.com");
	}
	@Then("^Validate Google Home page$")
	public void validateGooglePage() {
		System.out.println(driver.getTitle());
	}
	
	@Then("^Enter (.*)$")
	public void enterSearchTerm(String SearchTerm) {
		WebElement searchTerm = driver.findElement(By.name("q"));
		searchTerm.sendKeys(SearchTerm);
		searchTerm.sendKeys(Keys.ENTER);
	}
	
	@Then("^Validate Google search results page$")
	public void searchResultsPage() {
	
		System.out.println(driver.getTitle());
	}
	
	@Then("^Validate gmail page$")
	public void validate_gmail_page(){
	    WebElement gmailLink = driver.findElement(By.linkText("Gmail"));
	    gmailLink.click();
	    System.out.println(driver.getTitle());
	}
	
	@Then("^Quit Browser$")
	public void quitBrowser() {
		driver.quit();
	}
	
	}
