# AUTOAADL3

## Note
This website won't work if you open it direcly in your browser, because it's sending POST request to another website.<br>
For it to work, CORS need to be disabled in the browser ( see Set-up section below ).

## Set-up
Start your google chrome browser in security disabled mode following this tutorial :<br>
### Windows
1 - [Click here](https://raw.githubusercontent.com/shellmage/AUTOAADL3/master/AUTOAADL3.lnk) to download the pre-configured chrome shortcut.<br>
2 - Rename it to "AUTOAADL3.lnk".<br>
3 - Double click it.<br>
### Linux
1 - Download this [bash script](https://raw.githubusercontent.com/shellmage/AUTOAADL3/master/AUTOAADL3.sh), or copy paste it into a file name "AUTOAADL3.sh":<br>
```bash
#!/usr/bin/env bash
google-chrome-stable --disable-web-security  --user-data-dir="~/.AADL3-chrome-nocors" &
exit

```
2 - Naviagate the the directory where you downloaded the bash script and run this command to add exuction permission :<br>
```bash
chmod +x AUTOAADL3.sh
```
3 - Run it:<br>
```bash
./AUTOAADL3.sh
```
