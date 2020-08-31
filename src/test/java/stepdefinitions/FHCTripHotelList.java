package stepdefinitions;

import io.cucumber.java.bs.A;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import page.FHCTripHotelListPage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class FHCTripHotelList {

    FHCTripHotelListPage fhcTripHotelListPage=new FHCTripHotelListPage();

    @Given("user is on the fhc trip page")
    public void user_is_on_the_fhc_trip_page() {
        Driver.getDriver().get(ConfigurationReader.getProperty("fhc_trip_url"));
        fhcTripHotelListPage.userName.sendKeys(ConfigurationReader.getProperty("user_name"));
        fhcTripHotelListPage.password.sendKeys(ConfigurationReader.getProperty("password"));
        fhcTripHotelListPage.logInButton.click();
    }

    @Given("user checks if the Hotel List button appears on the home page")
    public void user_checks_if_the_Hotel_List_button_appears_on_the_home_page() {
        Assert.assertTrue(fhcTripHotelListPage.hotelListButton.isEnabled());
    }

    @Given("user clicks on Hotel List button")
    public void user_clicks_on_Hotel_List_button() {
        fhcTripHotelListPage.hotelListButton.click();
    }

    @Given("user gets the existing URL and checks it")
    public void user_gets_the_existing_URL_and_checks_it() {
        String link=Driver.getDriver().getCurrentUrl();
        Assert.assertEquals(link,ConfigurationReader.getProperty("fhc_trip_hotel_list_url"));
    }

    @Then("user checks on the page title")
    public void user_checks_on_the_page_title() {
        String title=fhcTripHotelListPage.title.getText();
        Assert.assertEquals(title,"LIST OF HOTELS");
    }

}
