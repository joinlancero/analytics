const me = document.querySelector('script[lancero-pk]');
const pk = me.getAttribute('lancero-pk');
const referrer = document.referrer;


document.onreadystatechange = async () => {
    if (document.readyState === 'complete') {
        const userInfo = await fetch('https://geolocation-db.com/json/').then(res => res.json())
        
        if(!referrer.includes('localhost') && !referrer.includes('127.0.0.1')) {
            await fetch('https://api.lancero.app/projects/addvisit', {
                method: 'POST',
                body: JSON.stringify({
                    referredSite: referrer,
                    ip: userInfo.IPv4,
                    country: userInfo.country,
                }),
                headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${pk}`},
            })
        }
    }
};