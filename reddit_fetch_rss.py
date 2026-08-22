import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET
import time

def fetch_reddit_rss(query, limit=100):
    url = f"https://www.reddit.com/search.rss?q={urllib.parse.quote(query)}&sort=new"
    # RSS doesn't strictly support limit=100 in the same way, but it returns recent items.
    req = urllib.request.Request(
        url,
        headers={'User-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
    )
    try:
        with urllib.request.urlopen(req) as response:
            if response.status != 200:
                print(f"Error fetching {query}: {response.status}")
                return []
            
            xml_data = response.read()
            root = ET.fromstring(xml_data)
            
            posts = []
            # Atom feed namespace
            ns = {'atom': 'http://www.w3.org/2005/Atom'}
            for entry in root.findall('atom:entry', ns):
                title = entry.find('atom:title', ns).text
                link = entry.find('atom:link', ns).attrib['href']
                
                # RSS doesn't easily give score/num_comments without parsing the HTML content, 
                # but let's see if we can extract it or if it's even present.
                content = entry.find('atom:content', ns)
                score = 0
                num_comments = 0
                if content is not None and content.text:
                    # Very hacky: try to find 'score' or comments in the HTML snippet
                    # Usually it's not directly in the standard Reddit search RSS
                    pass
                
                posts.append({
                    'title': title,
                    'url': link,
                    'score': score, # Fallback, RSS lacks this data natively
                    'num_comments': num_comments
                })
            return posts
    except Exception as e:
        print(f"Exception fetching {query}: {e}")
        return []

if __name__ == "__main__":
    queries = ["n8n", "automação"]
    for query in queries:
        print(f"--- Top Posts for: {query} ---")
        posts = fetch_reddit_rss(query)
        print(f"Fetched {len(posts)} posts.")
        for i, post in enumerate(posts[:5], 1):
            print(f"{i}. {post['title']}")
            print(f"   URL: {post['url']}")
            print()
        time.sleep(2)
