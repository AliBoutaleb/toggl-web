package controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/")
public class IndexController {

    private static final Logger log = LoggerFactory.getLogger(IndexController.class);

    @RequestMapping("/task")
    public ModelAndView reload(){
        return new ModelAndView("index.html");
    }
}
