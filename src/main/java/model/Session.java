package model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.SessionScope;

@SessionScope
@Component("session")
@AllArgsConstructor
@Data
public class Session {

    private User user;
    private String url;

    public Session() {
        this.user=null;
        this.url="";
    }

    public boolean isAuthentificated() {
        if(null == user) {
            return false;
        }else {
            return true;
        }
    }
}
