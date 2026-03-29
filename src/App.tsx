import { 
  LayoutDashboard, 
  Wrench, 
  Sliders, 
  MousePointerClick, 
  History, 
  Bell, 
  Settings, 
  Search, 
  ShieldCheck, 
  HelpCircle, 
  LogOut, 
  FileText, 
  Sparkles, 
  Download, 
  Link, 
  CheckCircle, 
  Image as ImageIcon, 
  AlertTriangle, 
  PlusSquare, 
  Grid, 
  BarChart3, 
  Lock, 
  Megaphone, 
  UploadCloud,
  Filter,
  MoreVertical,
  ArrowRight,
  Eye,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---

type View = 'dashboard' | 'admin';

interface Tool {
  id: string;
  title: string;
  description: string;
  icon: any;
  tag?: string;
  tagColor?: string;
  type?: 'ready' | 'ai' | 'video' | 'sponsored';
}

interface Activity {
  id: string;
  title: string;
  time: string;
  icon: any;
  iconColor: string;
}

// --- Components ---

const Sidebar = ({ currentView, setView }: { currentView: View, setView: (v: View) => void }) => {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard, view: 'dashboard' as View },
    { id: 'tools', label: 'My Tools', icon: Wrench, view: 'admin' as View },
    { id: 'customization', label: 'Customization', icon: Sliders },
    { id: 'ad-management', label: 'Ad Management', icon: MousePointerClick },
    { id: 'user-logs', label: 'User Logs', icon: History },
  ];

  return (
    <aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 bg-surface-container py-6 space-y-2 pt-20 shadow-[40px_0_40px_rgba(172,137,255,0.06)] z-40">
      <div className="px-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-secondary-container rounded-lg flex items-center justify-center">
            <ShieldCheck className="text-on-secondary-container w-6 h-6" />
          </div>
          <div>
            <p className="font-headline text-sm font-bold text-primary">Admin Portal</p>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">System Oversight</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 font-body text-sm font-medium">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => item.view && setView(item.view)}
            className={`w-[calc(100%-16px)] mx-2 px-4 py-3 flex items-center gap-3 rounded-lg transition-all duration-300 hover:translate-x-1 ${
              (item.view === currentView) 
                ? 'bg-gradient-to-r from-primary to-primary-container text-background' 
                : 'text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto px-4">
        <div className="bg-surface-container-high rounded-xl p-4 mb-4">
          <p className="text-xs font-bold mb-2 text-on-surface">Cloud Storage</p>
          <div className="w-full bg-background rounded-full h-1.5 mb-2">
            <div className="bg-primary h-1.5 rounded-full" style={{ width: '65%' }}></div>
          </div>
          <p className="text-[10px] text-on-surface-variant">6.5 GB of 10 GB used</p>
        </div>
        <button className="w-full bg-secondary text-background font-bold py-2 rounded-lg text-sm mb-4 active:scale-95 transition-all">
          Upgrade Pro
        </button>
        <div className="flex flex-col gap-1 border-t border-outline-variant/10 pt-4">
          <button className="text-on-surface-variant px-4 py-2 hover:text-on-surface flex items-center gap-3 text-xs transition-colors">
            <HelpCircle className="w-4 h-4" />
            <span>Support</span>
          </button>
          <button className="text-on-surface-variant px-4 py-2 hover:text-error flex items-center gap-3 text-xs transition-colors">
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

const TopNav = ({ setView }: { setView: (v: View) => void }) => {
  return (
    <header className="flex justify-between items-center px-6 h-16 w-full fixed top-0 bg-background z-50 border-b border-outline-variant/10">
      <div className="flex items-center gap-8">
        <span className="text-2xl font-black tracking-tighter text-primary font-headline cursor-pointer" onClick={() => setView('dashboard')}>
          Lumina Control
        </span>
        <nav className="hidden md:flex gap-6 font-headline font-bold text-lg">
          <button onClick={() => setView('dashboard')} className="text-primary border-b-2 border-primary pb-1">Dashboard</button>
          <button className="text-on-surface-variant hover:text-on-surface transition-colors">Tools</button>
          <button className="text-on-surface-variant hover:text-on-surface transition-colors">Analytics</button>
          <button onClick={() => setView('admin')} className="text-on-surface-variant hover:text-on-surface transition-colors">Admin</button>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden lg:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
          <input 
            className="bg-surface-container-highest border-none rounded-lg pl-10 pr-4 py-2 w-64 focus:ring-2 focus:ring-primary/30 text-sm text-on-surface outline-none" 
            placeholder="Search tools..." 
            type="text"
          />
        </div>
        <button className="text-on-surface-variant hover:bg-surface-container-high p-2 rounded-lg transition-all duration-300">
          <Bell className="w-5 h-5" />
        </button>
        <button className="text-on-surface-variant hover:bg-surface-container-high p-2 rounded-lg transition-all duration-300">
          <Settings className="w-5 h-5" />
        </button>
        <div className="h-8 w-8 rounded-full overflow-hidden border border-outline-variant/30 cursor-pointer">
          <img 
            alt="User profile" 
            src="https://picsum.photos/seed/admin/100/100" 
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
};

const MobileNav = ({ setView }: { setView: (v: View) => void }) => {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-4 pb-safe bg-surface-container-high/60 backdrop-blur-xl border-t border-outline-variant/15 md:hidden">
      <button onClick={() => setView('dashboard')} className="flex flex-col items-center justify-center text-primary font-bold transition-transform duration-300 scale-110">
        <LayoutDashboard className="w-6 h-6" />
        <span className="font-body text-[10px] uppercase tracking-widest mt-1">Home</span>
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-on-surface transition-transform duration-300">
        <Grid className="w-6 h-6" />
        <span className="font-body text-[10px] uppercase tracking-widest mt-1">Tools</span>
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-on-surface transition-transform duration-300">
        <Search className="w-6 h-6" />
        <span className="font-body text-[10px] uppercase tracking-widest mt-1">Search</span>
      </button>
      <button className="flex flex-col items-center justify-center text-on-surface-variant hover:text-on-surface transition-transform duration-300">
        <ImageIcon className="w-6 h-6" />
        <span className="font-body text-[10px] uppercase tracking-widest mt-1">Profile</span>
      </button>
    </nav>
  );
};

// --- Main Views ---

const DashboardView = () => {
  const tools: Tool[] = [
    { id: '1', title: 'PDF Editor', description: 'Merge, split, and annotate PDF documents with lossless precision.', icon: FileText, type: 'ready' },
    { id: '2', title: 'Background Remover', description: 'Instantly isolate subjects from images using neural edge detection.', icon: Sparkles, type: 'ai' },
    { id: '3', title: 'TikTok Downloader', description: 'Export videos without watermarks in high resolution instantly.', icon: Download, type: 'video' },
    { id: '4', title: 'Premium Link Guard', description: 'Advanced protection for shared assets with encrypted redirects.', icon: Link, type: 'sponsored' },
  ];

  const activities: Activity[] = [
    { id: '1', title: 'PDF Merged', time: '2 mins ago', icon: CheckCircle, iconColor: 'text-primary' },
    { id: '2', title: 'BG Removed', time: '15 mins ago', icon: ImageIcon, iconColor: 'text-secondary' },
    { id: '3', title: 'Export Failed', time: '1 hour ago', icon: AlertTriangle, iconColor: 'text-error' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-7xl mx-auto"
    >
      <div className="py-8">
        <h1 className="font-headline font-extrabold text-4xl mb-2 text-on-surface">Welcome back, Felix</h1>
        <p className="text-on-surface-variant max-w-2xl">Access your high-performance toolset. Manage, optimize, and export your digital assets with hyper-fluid precision.</p>
      </div>

      {/* Top Banner Ad */}
      <div className="w-full bg-black h-24 rounded-xl mb-10 flex items-center justify-center relative overflow-hidden group border border-outline-variant/10">
        <div className="absolute top-0 right-0 p-2">
          <span className="text-[10px] text-tertiary bg-surface-container-highest px-2 py-0.5 rounded-sm uppercase tracking-widest border border-tertiary/20">Sponsored</span>
        </div>
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-primary/10 to-transparent"></div>
        <p className="text-on-surface-variant text-sm font-medium">Top Banner Advertisement Area</p>
        <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-tertiary/10 blur-xl"></div>
      </div>

      <div className="flex flex-col xl:flex-row gap-8">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold font-headline flex items-center gap-2">
              <span className="w-2 h-6 bg-primary rounded-full"></span>
              Popular Tools
            </h2>
            <button className="bg-surface-container-high hover:bg-surface-container-highest p-2 rounded-lg text-on-surface-variant transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool) => (
              <div key={tool.id} className={`glass-card p-6 rounded-xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden border border-outline-variant/10 ${tool.type === 'sponsored' ? 'bg-black' : ''}`}>
                {tool.type === 'sponsored' && (
                  <div className="absolute -top-1 -right-1">
                    <div className="w-2 h-2 bg-tertiary rounded-full animate-pulse"></div>
                  </div>
                )}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                    tool.type === 'ready' ? 'bg-primary/10' : 
                    tool.type === 'ai' ? 'bg-secondary/10' : 
                    tool.type === 'video' ? 'bg-tertiary/10' : 'bg-surface-container-high'
                  }`}>
                    <tool.icon className={`w-8 h-8 ${
                      tool.type === 'ready' ? 'text-primary' : 
                      tool.type === 'ai' ? 'text-secondary' : 
                      tool.type === 'video' ? 'text-tertiary' : 'text-on-surface-variant'
                    }`} />
                  </div>
                  <span className={`text-[10px] px-2 py-1 rounded-full font-bold uppercase border ${
                    tool.type === 'ready' ? 'text-primary bg-primary/10 border-primary/20' : 
                    tool.type === 'ai' ? 'text-secondary bg-secondary/10 border-secondary/20' : 
                    tool.type === 'video' ? 'text-tertiary bg-tertiary/10 border-tertiary/20' : 
                    'text-on-surface-variant bg-surface-container-highest border-outline-variant/20'
                  }`}>
                    {tool.type === 'ready' ? 'Ready' : tool.type === 'ai' ? 'AI Powered' : tool.type === 'video' ? 'Video' : 'Sponsored'}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{tool.title}</h3>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">{tool.description}</p>
                <button className={`w-full py-3 font-bold rounded-lg active:scale-95 transition-all flex items-center justify-center gap-2 ${
                  tool.type === 'ready' 
                    ? 'bg-gradient-to-r from-primary to-primary-container text-background' 
                    : 'bg-surface-container-highest hover:bg-surface-container-high text-on-surface border border-outline-variant/10'
                }`}>
                  {tool.type === 'sponsored' ? 'Access Link' : 'Open Tool'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Bottom Promoted Content */}
          <div className="mt-10 w-full bg-black h-40 rounded-xl flex items-center justify-center border border-outline-variant/5">
            <div className="text-center">
              <p className="text-on-surface-variant text-xs uppercase tracking-widest mb-4">Promoted Content</p>
              <div className="flex gap-4">
                <div className="h-16 w-32 bg-surface-container-high rounded-lg flex items-center justify-center text-[10px] text-on-surface-variant border border-outline-variant/10">Partner 1</div>
                <div className="h-16 w-32 bg-surface-container-high rounded-lg flex items-center justify-center text-[10px] text-on-surface-variant border border-outline-variant/10">Partner 2</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-80 space-y-6">
          <div className="glass-card rounded-xl p-6 border border-outline-variant/10">
            <h3 className="font-bold text-lg mb-4 font-headline">Recent Activity</h3>
            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="flex gap-3">
                  <div className={`w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center flex-shrink-0`}>
                    <activity.icon className={`w-4 h-4 ${activity.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-[10px] text-on-surface-variant">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full bg-black h-[400px] rounded-xl flex flex-col items-center justify-center p-6 text-center border-l-4 border-tertiary relative overflow-hidden">
            <span className="text-[10px] text-tertiary uppercase tracking-widest mb-4 z-10">Advertisement</span>
            <div className="w-full h-48 bg-surface-container-high rounded-lg mb-4 flex items-center justify-center overflow-hidden z-10">
              <img 
                alt="Sponsor" 
                className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-500" 
                src="https://picsum.photos/seed/tech/400/300" 
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="font-bold text-on-surface mb-2 z-10">Scale Your Workflow</p>
            <p className="text-xs text-on-surface-variant mb-6 z-10">Upgrade to Enterprise for unlimited concurrent exports and API access.</p>
            <button className="text-tertiary border border-tertiary/30 px-6 py-2 rounded-full text-sm font-bold hover:bg-tertiary hover:text-background transition-all z-10">
              Learn More
            </button>
            <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AdminView = () => {
  const existingCards = [
    { id: '1', title: 'Live Analytics Hub', url: 'https://control.lumina.com/analytics/v2', icon: BarChart3, tags: ['Public', 'High Prio'] },
    { id: '2', title: 'Credential Vault', url: 'https://secure.lumina.com/vault/keys', icon: Lock, tags: ['Private'], locked: true },
    { id: '3', title: 'Active Promotions', url: 'https://marketing.lumina.com/ads', icon: Megaphone, tags: ['Internal'] },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-7xl mx-auto"
    >
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 rounded bg-secondary-container text-[10px] font-bold text-on-secondary-container tracking-widest uppercase">Admin Mode</span>
            <div className="h-1 w-1 rounded-full bg-outline-variant"></div>
            <span className="text-on-surface-variant text-xs font-medium">Active Session: 4h 12m</span>
          </div>
          <h1 className="text-4xl font-extrabold font-headline tracking-tight text-on-surface">Exclusive Admin Dashboard</h1>
          <p className="text-on-surface-variant mt-1">Configure system tools, manage card assets, and audit display settings.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-sm">
            <Download className="w-4 h-4" /> Export Logs
          </button>
          <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-6 py-2.5 rounded-xl font-extrabold text-sm transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-2 shadow-lg">
            <UploadCloud className="w-4 h-4" /> Deploy Changes
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        <div className="xl:col-span-8 space-y-8">
          {/* Add New Tool Card */}
          <section className="glass-panel rounded-3xl p-8 border border-outline-variant/15 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
              <PlusSquare className="w-24 h-24" />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <PlusSquare className="text-primary w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold font-headline">Add New Tool Card</h2>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold ml-1">Card Title</label>
                <input className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/30 transition-all text-on-surface placeholder:text-outline outline-none" placeholder="e.g., Performance Metrics" type="text"/>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold ml-1">Icon Name (Material)</label>
                <div className="relative">
                  <input className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/30 transition-all text-on-surface placeholder:text-outline outline-none" placeholder="e.g., speed" type="text"/>
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold ml-1">Tool Redirect Link</label>
                <input className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/30 transition-all text-on-surface placeholder:text-outline outline-none" placeholder="https://internal.lumina.com/..." type="url"/>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold ml-1">Access Password</label>
                <div className="relative">
                  <input className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/30 transition-all text-on-surface placeholder:text-outline outline-none" placeholder="••••••••" type="password"/>
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors" type="button">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="md:col-span-2 pt-4">
                <button className="w-full bg-surface-container-highest hover:bg-surface-variant text-primary font-bold py-4 rounded-xl transition-all border border-primary/20 flex items-center justify-center gap-2" type="submit">
                  <PlusSquare className="w-5 h-5" /> Create Tool Entry
                </button>
              </div>
            </form>
          </section>

          {/* Edit Existing Cards */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Grid className="text-secondary w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold font-headline">Edit Existing Cards</h2>
              </div>
              <div className="flex gap-2">
                <button className="p-2 bg-surface-container text-on-surface-variant rounded-lg hover:bg-surface-container-high transition-colors">
                  <Filter className="w-5 h-5" />
                </button>
                <button className="p-2 bg-surface-container text-on-surface-variant rounded-lg hover:bg-surface-container-high transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {existingCards.map((card) => (
                <div key={card.id} className="group bg-surface-container hover:bg-surface-container-high rounded-2xl p-5 transition-all duration-300 relative border border-transparent hover:border-outline-variant/20">
                  <div className="flex justify-between items-start mb-4">
                    <div className="h-12 w-12 rounded-xl bg-surface-container-highest flex items-center justify-center">
                      <card.icon className="text-primary w-7 h-7" />
                    </div>
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-on-surface-variant hover:text-primary-container hover:bg-primary-container/10 rounded-lg transition-all">
                        <Sliders className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container/10 rounded-lg transition-all">
                        <LogOut className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <h3 className="font-bold text-on-surface mb-1">{card.title}</h3>
                  <p className="text-xs text-on-surface-variant line-clamp-1">{card.url}</p>
                  <div className="mt-4 flex items-center gap-2">
                    {card.tags.map(tag => (
                      <span key={tag} className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                        tag === 'Public' ? 'bg-tertiary/10 text-tertiary' : 
                        tag === 'High Prio' ? 'bg-secondary-container/20 text-secondary' : 
                        tag === 'Private' ? 'bg-error/10 text-error' : 'bg-primary/10 text-primary'
                      }`}>
                        {tag}
                      </span>
                    ))}
                    {card.locked && <Lock className="w-3 h-3 text-on-surface-variant" />}
                  </div>
                </div>
              ))}
              <div className="border-2 border-dashed border-outline-variant/30 rounded-2xl p-5 flex flex-col items-center justify-center text-on-surface-variant hover:border-primary/50 hover:text-primary transition-all cursor-pointer group">
                <PlusSquare className="w-10 h-10 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold tracking-widest uppercase">Quick Add Tool</span>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Ad Settings & Audit */}
        <div className="xl:col-span-4 space-y-8">
          <section className="bg-black rounded-3xl p-8 border border-tertiary/10 relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-tertiary/5 rounded-full blur-3xl"></div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-tertiary/10 flex items-center justify-center">
                <MousePointerClick className="text-tertiary w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold font-headline">Ad Settings</h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl">
                <div>
                  <p className="font-bold text-sm text-on-surface">Global Monetization</p>
                  <p className="text-[10px] text-on-surface-variant">Enable sidebar ad slots</p>
                </div>
                <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 h-4 w-4 bg-background rounded-full shadow-sm"></div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-bold text-tertiary tracking-widest uppercase ml-1">Current Active Banner</p>
                <div className="relative group rounded-2xl overflow-hidden aspect-video bg-surface-container-high border border-outline-variant/20">
                  <img 
                    alt="Ad Preview" 
                    className="w-full h-full object-cover" 
                    src="https://picsum.photos/seed/banner/400/225" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity gap-3">
                    <button className="bg-primary text-background px-4 py-2 rounded-lg text-xs font-bold">Replace</button>
                    <button className="bg-surface-container text-on-surface px-4 py-2 rounded-lg text-xs font-bold">Remove</button>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold ml-1">Target Audience Segment</label>
                <div className="relative">
                  <select className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 text-sm text-on-surface focus:ring-2 focus:ring-tertiary/30 appearance-none outline-none">
                    <option>Standard Users</option>
                    <option>Enterprise Clients</option>
                    <option selected>Admin Restricted</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant pointer-events-none" />
                </div>
              </div>
            </div>
          </section>

          <section className="glass-panel rounded-3xl p-6 border border-outline-variant/15">
            <h2 className="text-sm font-bold font-headline mb-6 flex items-center gap-2">
              <History className="text-primary w-5 h-5" /> Recent Actions
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-xs text-on-surface font-medium">Card <span className="text-primary-container">"Dev Logs"</span> was updated</p>
                  <p className="text-[10px] text-on-surface-variant">12 minutes ago by Root_Admin</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-2 w-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-xs text-on-surface font-medium">New tool category <span className="text-secondary">"Audit"</span> created</p>
                  <p className="text-[10px] text-on-surface-variant">2 hours ago</p>
                </div>
              </div>
              <div className="flex gap-4 opacity-50">
                <div className="h-2 w-2 rounded-full bg-error mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-xs text-on-surface font-medium">Ad Slot 04 deleted</p>
                  <p className="text-[10px] text-on-surface-variant">Yesterday at 11:45 PM</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 text-[10px] font-bold text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest">
              View Full Audit Trail
            </button>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

// --- App Root ---

export default function App() {
  const [view, setView] = useState<View>('dashboard');

  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-primary/30">
      <TopNav setView={setView} />
      <Sidebar currentView={view} setView={setView} />
      
      <main className="md:ml-64 pt-16 pb-24 md:pb-8 px-6 min-h-screen">
        <AnimatePresence mode="wait">
          {view === 'dashboard' ? (
            <DashboardView key="dashboard" />
          ) : (
            <AdminView key="admin" />
          )}
        </AnimatePresence>
      </main>

      <MobileNav setView={setView} />
    </div>
  );
}
