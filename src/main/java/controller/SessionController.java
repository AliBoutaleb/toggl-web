package controller;

import model.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SessionController {

    @Autowired(required = true)
    @Qualifier(value = "session")
    Session session;

}
