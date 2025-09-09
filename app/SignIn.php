<?php
class SignIn
{
    const logins = array(
        "adm" => "admpassword",
        "user" => "123",
        "user2" => "321"
    );

    public function check($username, $password): int
    {
        foreach (self::logins as $user => $pass) {
            if ($username == $user) {
                if ($password == $pass) {
                    return 0;
                } else {
                    return 1;
                }
            }
        }
        return 2;
    }
}
?>