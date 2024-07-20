# AUTOAADL3

## Note
This website won't work if you open it direcly in your browser, because it's sending POST request to another website.<br>
For it to work, CORS need to be disabled in the browser ( see Set-up section below ).

## Set-up
Start your google chrome browser in security disabled mode following this tutorial :<br>
### Windows
1 - In you desktop : Right click > New > Shortcut.<br>
2 - Browse to chrome.exe, usually found either in "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" or "C:\Program Files\Google\Chrome\Application\chrome.exe".<br>
3 - Add these arguments after the path.<br>
```
--disable-web-security --user-data-dir="C:\"   "https://shellmage.github.io/AUTOAADL3/"
```
4 - Save and double click it.<br>
### Linux
1 - Copy paste this into a file named "AUTOAADL3.sh":<br>
```bash
#!/usr/bin/env bash
google-chrome-stable --disable-web-security  --user-data-dir="~/.AADL3-chrome-nocors" https://shellmage.github.io/AUTOAADL3/ &
exit

```
2 - Naviagate the the directory where you created "AUTOAADL3.sh" and run this command to add exuction permission :<br>
```bash
chmod +x AUTOAADL3.sh
```
3 - Run it:<br>
```bash
./AUTOAADL3.sh
```
