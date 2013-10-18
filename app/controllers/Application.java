package controllers;

import play.*;
import play.mvc.*;

import java.util.*;

import net.sf.ehcache.config.ConfigurationFactory;

import models.*;

public class Application extends Controller {
	
    public static void index() {
    	String theme = Play.configuration.getProperty("overman.theme");
    	Logger.info("theme is %s", theme);
        render("/themes/" + theme + "/index.html");
    }

}