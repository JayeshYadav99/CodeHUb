import React,{useEffect,useState} from "react";
import { BsEyeFill, BsPlayFill } from 'react-icons/bs';
import {Chart, ArcElement,CategoryScale,LinearScale} from 'chart.js'
import Mychart from './Github'
Chart.register(ArcElement);
Chart.register(CategoryScale);
Chart.register(LinearScale);
import { Pie } from 'react-chartjs-2';
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useAuth0 } from '@auth0/auth0-react';
import "chartjs-plugin-datalabels";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);
const Homepage = () => {
  const colors = ['bg-purple-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500'];
const colorInterval = 3000;
const [repoColors, setRepoColors] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Rotate colors by shifting the first color to the end
      const rotatedColors = [...colors.slice(1), colors[0]];
      setRepoColors(rotatedColors);
    }, colorInterval);

    return () => clearInterval(interval);
  }, []);
  const [avatarURL, setAvatarURL] = useState();
  const [githubUsername, setGitHubUsername] = useState();
  const [repoData, setRepoData] = useState([]);
  const [repoLanguageData, setRepoLanguageData] = useState([]);
  const [showRepos, setShowRepos] = useState(false);
  const { auth0, isLoading, isAuthenticated ,getAccessTokenSilently} = useAuth0();
  const[githubtoken,SetgithubToken]=useState('');
  const[githubApptoken,SetgithubaPpToken]=useState('');
 var Index=0;
 var gart;
  
  const fetchUserInfo = async (ACCESS_TOKEN) => {
    try {
      const response = await axios.get('https://dev-fkzyzzay6f6jrars.us.auth0.com/userinfo', {
        headers: {
          'Authorization': `Bearer ${ACCESS_TOKEN}`,
       
        },
      });
  return response.data;
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };
  async function auth()
{

      
      const accessToken= await getAccessToken();
      const token=`${accessToken}`;
      //
      // getUserData(token);
      const Myuser= await fetchUserInfo(token);
      const ACCESS_TOKEN = accessToken;
      //console.log(Myuser.sub);
      const userId=Myuser.sub;

     
 var answer;
 const VITE_AUTH0_MANAGEMENT_API_KEY =`eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im5mUzdvMDRrTTdrbjBCbm9BZlJRRiJ9.eyJpc3MiOiJodHRwczovL2Rldi1ma3p5enpheTZmNmpyYXJzLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiI1WjV5NVdYVWJvMVo3ZWZPR0xZNWRRdkt6TGhJd3V4WEBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9kZXYtZmt6eXp6YXk2ZjZqcmFycy51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTY4NTI3MjkxNiwiZXhwIjoxNjg2NDU5MzE2LCJhenAiOiI1WjV5NVdYVWJvMVo3ZWZPR0xZNWRRdkt6TGhJd3V4WCIsInNjb3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkYXRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgcmVhZDp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfY3VzdG9tX2Jsb2NrcyBkZWxldGU6dXNlcl9jdXN0b21fYmxvY2tzIGNyZWF0ZTp1c2VyX3RpY2tldHMgcmVhZDpjbGllbnRzIHVwZGF0ZTpjbGllbnRzIGRlbGV0ZTpjbGllbnRzIGNyZWF0ZTpjbGllbnRzIHJlYWQ6Y2xpZW50X2tleXMgdXBkYXRlOmNsaWVudF9rZXlzIGRlbGV0ZTpjbGllbnRfa2V5cyBjcmVhdGU6Y2xpZW50X2tleXMgcmVhZDpjb25uZWN0aW9ucyB1cGRhdGU6Y29ubmVjdGlvbnMgZGVsZXRlOmNvbm5lY3Rpb25zIGNyZWF0ZTpjb25uZWN0aW9ucyByZWFkOnJlc291cmNlX3NlcnZlcnMgdXBkYXRlOnJlc291cmNlX3NlcnZlcnMgZGVsZXRlOnJlc291cmNlX3NlcnZlcnMgY3JlYXRlOnJlc291cmNlX3NlcnZlcnMgcmVhZDpkZXZpY2VfY3JlZGVudGlhbHMgdXBkYXRlOmRldmljZV9jcmVkZW50aWFscyBkZWxldGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGNyZWF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgcmVhZDpydWxlcyB1cGRhdGU6cnVsZXMgZGVsZXRlOnJ1bGVzIGNyZWF0ZTpydWxlcyByZWFkOnJ1bGVzX2NvbmZpZ3MgdXBkYXRlOnJ1bGVzX2NvbmZpZ3MgZGVsZXRlOnJ1bGVzX2NvbmZpZ3MgcmVhZDpob29rcyB1cGRhdGU6aG9va3MgZGVsZXRlOmhvb2tzIGNyZWF0ZTpob29rcyByZWFkOmFjdGlvbnMgdXBkYXRlOmFjdGlvbnMgZGVsZXRlOmFjdGlvbnMgY3JlYXRlOmFjdGlvbnMgcmVhZDplbWFpbF9wcm92aWRlciB1cGRhdGU6ZW1haWxfcHJvdmlkZXIgZGVsZXRlOmVtYWlsX3Byb3ZpZGVyIGNyZWF0ZTplbWFpbF9wcm92aWRlciBibGFja2xpc3Q6dG9rZW5zIHJlYWQ6c3RhdHMgcmVhZDppbnNpZ2h0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOmxvZ3NfdXNlcnMgcmVhZDpzaGllbGRzIGNyZWF0ZTpzaGllbGRzIHVwZGF0ZTpzaGllbGRzIGRlbGV0ZTpzaGllbGRzIHJlYWQ6YW5vbWFseV9ibG9ja3MgZGVsZXRlOmFub21hbHlfYmxvY2tzIHVwZGF0ZTp0cmlnZ2VycyByZWFkOnRyaWdnZXJzIHJlYWQ6Z3JhbnRzIGRlbGV0ZTpncmFudHMgcmVhZDpndWFyZGlhbl9mYWN0b3JzIHVwZGF0ZTpndWFyZGlhbl9mYWN0b3JzIHJlYWQ6Z3VhcmRpYW5fZW5yb2xsbWVudHMgZGVsZXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGNyZWF0ZTpndWFyZGlhbl9lbnJvbGxtZW50X3RpY2tldHMgcmVhZDp1c2VyX2lkcF90b2tlbnMgY3JlYXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgZGVsZXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgcmVhZDpjdXN0b21fZG9tYWlucyBkZWxldGU6Y3VzdG9tX2RvbWFpbnMgY3JlYXRlOmN1c3RvbV9kb21haW5zIHVwZGF0ZTpjdXN0b21fZG9tYWlucyByZWFkOmVtYWlsX3RlbXBsYXRlcyBjcmVhdGU6ZW1haWxfdGVtcGxhdGVzIHVwZGF0ZTplbWFpbF90ZW1wbGF0ZXMgcmVhZDptZmFfcG9saWNpZXMgdXBkYXRlOm1mYV9wb2xpY2llcyByZWFkOnJvbGVzIGNyZWF0ZTpyb2xlcyBkZWxldGU6cm9sZXMgdXBkYXRlOnJvbGVzIHJlYWQ6cHJvbXB0cyB1cGRhdGU6cHJvbXB0cyByZWFkOmJyYW5kaW5nIHVwZGF0ZTpicmFuZGluZyBkZWxldGU6YnJhbmRpbmcgcmVhZDpsb2dfc3RyZWFtcyBjcmVhdGU6bG9nX3N0cmVhbXMgZGVsZXRlOmxvZ19zdHJlYW1zIHVwZGF0ZTpsb2dfc3RyZWFtcyBjcmVhdGU6c2lnbmluZ19rZXlzIHJlYWQ6c2lnbmluZ19rZXlzIHVwZGF0ZTpzaWduaW5nX2tleXMgcmVhZDpsaW1pdHMgdXBkYXRlOmxpbWl0cyBjcmVhdGU6cm9sZV9tZW1iZXJzIHJlYWQ6cm9sZV9tZW1iZXJzIGRlbGV0ZTpyb2xlX21lbWJlcnMgcmVhZDplbnRpdGxlbWVudHMgcmVhZDphdHRhY2tfcHJvdGVjdGlvbiB1cGRhdGU6YXR0YWNrX3Byb3RlY3Rpb24gcmVhZDpvcmdhbml6YXRpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVycyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGRlbGV0ZTpvcmdhbml6YXRpb25fbWVtYmVycyBjcmVhdGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBjcmVhdGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgY3JlYXRlOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyByZWFkOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIHJlYWQ6b3JnYW5pemF0aW9uc19zdW1tYXJ5IGNyZWF0ZTphY3Rpb25zX2xvZ19zZXNzaW9ucyBjcmVhdGU6YXV0aGVudGljYXRpb25fbWV0aG9kcyByZWFkOmF1dGhlbnRpY2F0aW9uX21ldGhvZHMgdXBkYXRlOmF1dGhlbnRpY2F0aW9uX21ldGhvZHMgZGVsZXRlOmF1dGhlbnRpY2F0aW9uX21ldGhvZHMgcmVhZDpjbGllbnRfY3JlZGVudGlhbHMgY3JlYXRlOmNsaWVudF9jcmVkZW50aWFscyB1cGRhdGU6Y2xpZW50X2NyZWRlbnRpYWxzIGRlbGV0ZTpjbGllbnRfY3JlZGVudGlhbHMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.eIAa1qG7dj6irkLFEwFczkIAUXUAN0JJb4IdlYHxIlYJ5m7GeNhj6mOvjsLpHvPNQRCRdoLz-1ZSV5slLeI9MYyE6sBYcTa-YP45V_QGKaWR6m7i5lPcGwaz2QoWT0dOKuBguN3xBFiIC5pGFREUYMIp3YVYuYAvk-X8Sza9VFlgyBV7Nr7Goor1rFwykNYfcaAycOepq9oqL-E2NDy_cpZA-LUTX1uJGqH_i9fWs8lvuhzK8diOlntHQkvgkQM1N_mJLfQk9I_FhcNsr2phhXBlGN-WeS_RToXQuruGjm_nrnc3L3I84UqeXykpH8XwJgX6JfsLghxPhGTWxfiEiw`
////console.log(import.meta.env.VITE_AUTH0_MANAGEMENT_API_KEY);
      let  config  =   { 
        method :   'get' , 
        url :   `https://dev-fkzyzzay6f6jrars.us.auth0.com/api/v2/users/${userId}` , 
        headers :   {  
          'Accept' :   'application/json' ,  
          'Authorization' :   `Bearer ${VITE_AUTH0_MANAGEMENT_API_KEY}`,
          'Content-Type': 'application/json'
        } 
      } ; 
     
     
      axios ( config ) 
      . then ( ( response )   =>   { 
        console . log ( JSON . stringify ( response . data ) ) ; 
         answer =   response.data;
         //console.log(answer);
         //console.log(answer.identities[0].access_token);
         SetgithubToken(answer.identities[0].access_token);
         octo(answer.identities[0].access_token);
      } ) 
      . catch ( ( error )   =>   { 
        console . log ( error ) ; 
      } ) ; 
      
      
      
//      
    
 }
 const getAccessToken = async () => {
  if (!isLoading && isAuthenticated) {
    try {
      const accessToken = await getAccessTokenSilently();
      //console.log(accessToken);
      // Use the accessToken for API calls or other purposes
   return accessToken;
    } catch (error) {
      console.error('Failed to obtain access token:', error);
    }
  }
};





async function fetchRepoData(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await response.json();
    //console.log(data);
    setRepoData(data);
    const reposWithLanguages = await Promise.all(
      data.map(async (repo) => {
        const languagesResponse = await fetch(repo.languages_url);

        const languagesData = await languagesResponse.json();
        const labels = Object.keys(languagesData);
        const datas = Object.values(languagesData);
        return { labels, datas };
      })
    );
    //console.log(reposWithLanguages);
    //console.log(reposWithLanguages.length);

    //console.log(reposWithLanguages[0]);
    setRepoLanguageData(reposWithLanguages);
    gart=true;
  } catch (error) {
    //console.log(error);
  }
}
async function fetchInst() {
  const accessToken = ` eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOiAxNjg1MTcyNjI3LCAiZXhwIjogMTY4NTE3MzIyNywgImlzcyI6ICIzMzk1MDcifQ.bpGIh-ARtKeAEKbKzKEIpVaFV6vpJT8EvhQlOdfQlPxkrXU_Ia0jo49-ZteFww6wquuIJoT2OCBkNeBd2io7vpPWy62M4YZbcRPhaXXc-KEfJsE6nq_pu65SzDV6ac3yscYgXnADig0CtM6pt8lp9XD952vuXZcmR8sgljvJoRNRfTeFFwqPyihW6qOLOHrNk78kSC_UhRecMozFvdGsbSd_nI1QLm9cFOGpB_ExMzl7XkNwzVUIzgluJXryh2AwZDBGoonNObYSEsw6qdjpez9AMxwN1C81vu7dfFeEOuW8DVCh4zzepovsc3wkq83aGobt22NAT65-W8QU6k-3ng`;
  //console.log(accessToken)
  try {
    const response = await fetch(`https://api.github.com/app/installations/37966220/access_tokens`,{
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'octokit.rest',
        'Content-Type': 'application/json'
      },
    });
    const data = await response.json();
    //console.log(data);
    SetgithubaPpToken(data);
  
  } catch (error) {
    //console.log(error);
  }
}


//console.log(repoLanguageData);



async function octo(answer) {
  const headers = {
    'Authorization': `Bearer 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`,
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'octokit.rest'
  };

  try {
    const response = await fetch('https://api.github.com/user', {
      headers: headers
    });

    if (response.ok) {
      const user = await response.json();
      //console.log(user);
      fetchRepoData(user.login);

      const username=user.login;
    

        fetch(`https://api.github.com/users/${username}`)
          .then((res) => res.json())
          .then(
            (result) => {
              setAvatarURL(result.avatar_url);
              setGitHubUsername(result.login);
            },
            (error) => {
              //console.log(error);
            }
          );
     
    } else {

      console.error('Error retrieving user:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Error retrieving user:', error);
  }
}

const handleStart = async (repositoryId) => {
  fetchInst();
  const accessToken = githubApptoken.token;
  //console.log(accessToken);
  const apiUrl = 'https://api.github.com/user/codespaces';
  
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer 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`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'octokit.rest',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
       "repository_id": repositoryId,
        geo:"UsWest"
    })
  })
  
    if (response.ok) {
      const responseData = await response.json();
      //console.log('Codespace started:', responseData);
      window.location.href=`http://${responseData.name}.github.dev`;
      // Handle success or any further logic
    } else {
      console.error('Failed to start codespace:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Failed to start codespace:', error);
  }
  
};




  if (showRepos) {
    // auth();
    const answer=3;
    octo(answer);
   
  }

return (
<div className="w-full min-h-screen flex flex-col justify-center items-center p-8">
  <div className="mt-8">
    <Card className="w-64 bg-gray-900">
      <Card.Img variant="top" src={avatarURL} className="w-32 h-32 object-cover mx-auto mt-6 rounded-full p-2" />
      <Card.Body className="p-6">
        <div className="flex flex-col items-center">
          <Card.Title className="font-bold text-xl text-white mb-2">Welcome, {githubUsername}!</Card.Title>
          <Card.Text className="text-gray-400">
            Thank you for exploring our website. You can get anything from everything here.
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => setShowRepos(!showRepos)}
            className="mt-4 bg-purple-500 hover:bg-purple-700 transition-colors duration-300 text-lg py-2 px-4 rounded-lg"
          >
            {showRepos ? "Hide Repos" : "Show Repos"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  </div>


  {showRepos && (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
      {repoData.map((repo, index) => {
      return(
        <Card
          key={repo.id}
          className={`flex flex-col justify-between items-center ${repoColors[index % repoColors.length]} text-white hover:bg-pink-500 transition duration-300`}
        >
          <Card.Img variant="top" src="github.png" className="w-32 h-32 object-cover mt-4" />

          <Card.Body className="p-6 flex flex-col justify-between items-center">
            <div className="flex flex-col items-center">
              <Card.Title className="font-bold text-lg mb-2">{repo.name}</Card.Title>
              <Card.Text className="text-gray-200 overflow-hidden text-justify">
                {repo.description}
              </Card.Text>
            </div>

            <div className="flex items-center justify-center w-full mt-4">
              <Button variant={`primary bg-red-500 hover:bg-white hover:text-black`} href={repo.html_url} target="_blank" className="mt-2 flex items-center">
                <BsEyeFill className="mr-2" /> View Repository
              </Button>
              <Button variant={`secondary bg-black hover:bg-white hover:text-black`} className="mt-2 ml-4 flex items-center"  onClick={() => handleStart(repo.id)}>
                <BsPlayFill className="mr-2" /> Start a Codespace
              </Button>
            </div>
            <div className="mt-6 w-40">
           
          </div>

          </Card.Body>
        </Card>
        
        )
  })}
  
    </div>
  )}
</div>

  




);

        }


export default Homepage;