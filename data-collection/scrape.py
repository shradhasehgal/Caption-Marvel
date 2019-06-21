import requests
from bs4 import BeautifulSoup


page = requests.get('https://gramlike.com/instagram-captions/')

# Create a BeautifulSoup object
soup = BeautifulSoup(page.text, 'html.parser')

captions = soup.find_all('li')
for i in range(14,len(captions)-16):
    print(captions[i].get_text())
