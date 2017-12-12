package Models;

import java.util.Date;

/**
 * Created by Emmanuel Rose on 10/12/2017.
 */
public class Task {
    private String Title;
    private Date DueDate;
    private Date Time;
    private User Owner;

    Task(String title, Date date, Date time, User user)
    {
        Title=title;
        DueDate=date;
        Time=time;
        Owner=user;
    }


}
