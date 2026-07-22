import { useEffect, useState } from 'react'
import api from '../api/axios'
import { Link } from 'react-router-dom'

export default function Events(){
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const load = async ()=>{
            setLoading(true)
            try{
                // placeholder: replace '/events' with real backend endpoint when available
                const res = await api.get('/events')
                setEvents(res.data || [])
            }catch(e){
                // fallback: sample items
                setEvents([
                    { id: 1, title: 'Summer Music Festival', date: '2026-08-21', location: 'Central Park', description: 'Live bands and food trucks.' },
                    { id: 2, title: 'Tech Leadership Summit', date: '2026-09-10', location: 'Convention Center', description: 'Talks from industry leaders.' },
                    { id: 3, title: 'Weekend Wellness Retreat', date: '2026-10-05', location: 'Lakeside Resort', description: 'Yoga and mindfulness.' }
                ])
            }finally{
                setLoading(false)
            }
        }
        load()
    },[])

    return (
        <div style={{ minHeight:'calc(100vh - 120px)', padding: '40px 24px', background:'#F8FAFC' }}>
            <div style={{ maxWidth:1120, margin:'0 auto' }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24 }}>
                    <h1 style={{ margin:0 }}>Upcoming Events</h1>
                    <Link to="/create" style={{ color:'#2563EB', fontWeight:700 }}>Create Event</Link>
                </div>

                {loading && <p>Loading events...</p>}

                <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:20 }}>
                    {events.map(ev => (
                        <article key={ev.id} style={{ borderRadius:12, padding:18, background:'#fff', boxShadow:'0 8px 30px rgba(2,6,23,0.06)', border:'1px solid #E6EEF8' }}>
                            <h3 style={{ margin:'0 0 8px' }}>{ev.title}</h3>
                            <div style={{ color:'#64748B', fontSize:14, marginBottom:8 }}>{ev.date} · {ev.location}</div>
                            <p style={{ margin:0, color:'#475569' }}>{ev.description}</p>
                            <div style={{ marginTop:12, display:'flex', gap:8 }}>
                                <Link to={`/events/${ev.id}`} style={{ padding:'8px 12px', borderRadius:10, background:'#2563EB', color:'#fff', textDecoration:'none', fontWeight:700 }}>Details</Link>
                                <button style={{ padding:'8px 12px', borderRadius:10, border:'1px solid #E2E8F0', background:'transparent', cursor:'pointer' }}>Bookmark</button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}