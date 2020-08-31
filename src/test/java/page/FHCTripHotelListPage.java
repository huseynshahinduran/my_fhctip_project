package page;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class FHCTripHotelListPage {

    public FHCTripHotelListPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(id = "UserName")
    public WebElement userName;

    @FindBy(id = "Password")
    public WebElement password;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement logInButton;

    @FindBy(xpath = "//li/a[@href='/admin/HotelAdmin']")
    public WebElement hotelListButton;

    @FindBy(xpath = "//span[@class='caption-subject font-green-sharp bold uppercase']")
    public WebElement title;



}
