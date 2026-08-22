import urllib.request
import json
import time

def fetch_reddit_posts(query, limit=100):
    url = f"https://www.reddit.com/search.json?q={urllib.parse.quote(query)}&sort=new&limit={limit}"
    req = urllib.request.Request(
        url,
        headers={'User-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 AntigravityBot/1.0'}
    )
    try:
        with urllib.request.urlopen(req) as response:
            if response.status != 200:
                print(f"Error fetching {query}: {response.status}")
                return []
            
            data = json.loads(response.read().decode('utf-8'))
            posts = []
            if 'data' in data and 'children' in data['data']:
                for child in data['data']['children']:
                    post_data = child['data']
                    posts.append({
                        'title': post_data.get('title'),
                        'url': "https://www.reddit.com" + post_data.get('permalink', ''),
                        'score': post_data.get('score', 0),
                        'num_comments': post_data.get('num_comments', 0),
                        'subreddit': post_data.get('subreddit_name_prefixed'),
                        'created_utc': post_data.get('created_utc')
                    })
            return posts
    except Exception as e:
        print(f"Exception fetching {query}: {e}")
        return []

def analyze_posts(posts, top_n=5):
    for post in posts:
        post['engagement'] = post['score'] + (post['num_comments'] * 2)
        
    sorted_posts = sorted(posts, key=lambda x: x['engagement'], reverse=True)
    return sorted_posts[:top_n]

if __name__ == "__main__":
    import urllib.parse
    queries = ["n8n", "automação"]
    for query in queries:
        print(f"--- Top 5 Engaging Posts for: {query} ---")
        posts = fetch_reddit_posts(query, limit=100)
        print(f"Fetched {len(posts)} posts.")
        top_posts = analyze_posts(posts, top_n=5)
        for i, post in enumerate(top_posts, 1):
            print(f"{i}. {post['title']}")
            print(f"   Score: {post['score']} | Comments: {post['num_comments']} | Subreddit: {post['subreddit']}")
            print(f"   URL: {post['url']}")
            print()
        time.sleep(2)
