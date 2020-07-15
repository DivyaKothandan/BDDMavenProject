package runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin= {"com.cucumber.listener.ExtentCucumberFormatter:target/ExtendReport.html"},
		features= {"src/test/resources/Features"},
		glue= {"stepDefinitons"},
		format= {"pretty","html:report"}
		,tags= {"@Google,@GoogleSearch"}
		,monochrome=true
				,strict=false
				,dryRun=false
		)

public class Runner {
	@AfterClass
	public static void tearDown() {
		
	}
	
	

}
