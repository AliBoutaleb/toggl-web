package src.main.java.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class indexController {

    private static final Logger log = LoggerFactory.getLogger(indexController.class);

    @GetMapping("/")
    public ModelAndView indexView() {
        return new ModelAndView("index.html");
    }
}
