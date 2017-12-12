package Models;

import java.util.ArrayList;

/**
 * Created by Emmanuel Rose on 10/12/2017.
 */
public class Project {
    String Title;
    User Creator;
    ArrayList<User> Members;

    Project(String title, User creator)
    {
        Title=title;
        Creator=creator;
        Members=new ArrayList<User>();
    }

    public void setMembers(User member) {
        Members.add(member);
    }
}
