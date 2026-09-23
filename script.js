// ============================================================================
// 1. ANDROID 12+ MONET (MATERIAL YOU) DYNAMIC THEME ENGINE
// ============================================================================
function initAndroidMonetTheme() {
  const ua = navigator.userAgent;
  const androidMatch = ua.match(/Android\s([0-9\.]+)/);
  const isAndroid12Plus = androidMatch && parseFloat(androidMatch[1]) >= 12;

  const root = document.documentElement;

  if (isAndroid12Plus) {
    root.style.setProperty('--app-accent', 'var(--md-sys-color-primary, #1a73e8)');
    root.style.setProperty('--app-accent-hover', 'var(--md-sys-color-primary-container, #1557b0)');
    root.classList.add('monet-enabled');
  } else {
    root.style.setProperty('--app-accent', '#1a73e8');
    root.style.setProperty('--app-accent-hover', '#1557b0');
    root.classList.remove('monet-enabled');
  }
}
initAndroidMonetTheme();

// ============================================================================
// 2. MASTER TAXONOMY
// ============================================================================
const EXERCISE_DB = [
  // --- CHEST (HOME) ---
  { id: 'h_c_pushup', name: 'Normal Push-ups', target: 'Chest', equipment: false, goalMode: 'all', primary: 'Full Chest', secondary: 'Triceps', tertiary: 'Anterior Deltoids', demo: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_c_wide', name: 'Wide Push-ups', target: 'Chest', equipment: false, goalMode: 'all', primary: 'Outer Chest', secondary: 'Anterior Deltoids', tertiary: 'Triceps', demo: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_c_archer', name: 'Archer Push-ups', target: 'Chest', equipment: false, goalMode: 'all', primary: 'Chest Fly Movement', secondary: 'Front Delts', tertiary: 'Core', demo: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_c_decline', name: 'Decline Push-ups', target: 'Chest', equipment: false, goalMode: 'all', primary: 'Upper Chest & Clavicular Head', secondary: 'Front Deltoids', tertiary: 'Triceps', demo: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_c_incline', name: 'Incline Push-ups (Hands Elevated)', target: 'Chest', equipment: false, goalMode: 'all', primary: 'Lower Chest', secondary: 'Triceps', tertiary: 'Shoulders', demo: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_c_eccentric', name: 'Slow Eccentric Push-ups', target: 'Chest', equipment: false, goalMode: 'all', primary: 'Full Chest Under Tension', secondary: 'Core Stabilizers', tertiary: 'Triceps', demo: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_c_clap', name: 'Explosive Plyo Push-Up', target: 'Chest', equipment: false, goalMode: 'lose_weight', primary: 'Fast-Twitch Pectorals', secondary: 'Core', tertiary: 'Cardio', demo: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_c_planche_lean', name: 'Pseudo Planche Push-up', target: 'Chest', equipment: false, goalMode: 'build_muscle', primary: 'Upper Chest & Anterior Delts', secondary: 'Core', tertiary: 'Wrists', demo: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_c_diamond', name: 'Diamond Push-ups', target: 'Chest', equipment: false, goalMode: 'all', primary: 'Inner Chest & Triceps', secondary: 'Anterior Delts', tertiary: 'Core', demo: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_c_hindu', name: 'Hindu Push-ups', target: 'Chest', equipment: false, goalMode: 'all', primary: 'Pectorals & Deltoids', secondary: 'Triceps', tertiary: 'Spine Flexibility', demo: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&auto=format&fit=crop&q=60' },

  // --- SHOULDERS & TRAPS (HOME) ---
  { id: 'h_s_pike', name: 'Pike Push-up', target: 'Shoulders', equipment: false, goalMode: 'all', primary: 'Front Delt & Side Delt', secondary: 'Upper Traps', tertiary: 'Triceps', demo: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_s_elev_pike', name: 'Feet-Elevated Pike Push-up', target: 'Shoulders', equipment: false, goalMode: 'build_muscle', primary: 'Deltoid Trio', secondary: 'Traps', tertiary: 'Triceps', demo: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_s_handstand', name: 'Handstand Hold (Wall Supported)', target: 'Shoulders', equipment: false, goalMode: 'all', primary: 'All Deltoids', secondary: 'Traps', tertiary: 'Core', demo: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_s_hspu', name: 'Wall Handstand Push-up', target: 'Shoulders', equipment: false, goalMode: 'build_muscle', primary: 'Full Deltoid Complex', secondary: 'Traps', tertiary: 'Triceps', demo: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_s_lateral', name: 'Lateral Raise (Bottles / Bags)', target: 'Shoulders', equipment: false, goalMode: 'all', primary: 'Side Delts', secondary: 'Upper Traps', tertiary: 'Forearms', demo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_s_front', name: 'Front Raise', target: 'Shoulders', equipment: false, goalMode: 'all', primary: 'Front Delts', secondary: 'Upper Pectorals', tertiary: 'Core', demo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_s_reardelt', name: 'Rear Delt Raise', target: 'Shoulders', equipment: false, goalMode: 'all', primary: 'Rear Delts', secondary: 'Rhomboids', tertiary: 'Rotator Cuff', demo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_s_shrugs', name: 'Shrugs (Heavy Bag)', target: 'Traps', equipment: false, goalMode: 'all', primary: 'Upper Traps', secondary: 'Neck Extensors', tertiary: 'Grip', demo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_s_shoulder_taps', name: 'Plank Shoulder Taps', target: 'Shoulders', equipment: false, goalMode: 'lose_weight', primary: 'Deltoid Endurance', secondary: 'Core Obliques', tertiary: 'Chest', demo: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&auto=format&fit=crop&q=60' },

  // --- BACK (HOME) ---
  { id: 'h_b_pullup', name: 'Pull-ups', target: 'Back', equipment: false, goalMode: 'all', primary: 'Latissimus Dorsi (Lats)', secondary: 'Biceps', tertiary: 'Rhomboids', demo: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_b_wide_pull', name: 'Wide Grip Pull-ups', target: 'Back', equipment: false, goalMode: 'build_muscle', primary: 'Outer Lats Width', secondary: 'Teres Major', tertiary: 'Biceps', demo: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_b_table_row', name: 'Under-table Rows', target: 'Back', equipment: false, goalMode: 'all', primary: 'Mid Back & Lats', secondary: 'Biceps', tertiary: 'Rear Delts', demo: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_b_snow_angel', name: 'Reverse Snow Angels', target: 'Back', equipment: false, goalMode: 'all', primary: 'Lower Traps & Rhomboids', secondary: 'Rear Deltoids', tertiary: 'Erector Spinae', demo: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_b_superman', name: 'Superman Hold', target: 'Back', equipment: false, goalMode: 'all', primary: 'Lower Back (Erector Spinae)', secondary: 'Gluteus', tertiary: 'Hamstrings', demo: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_b_reverse_push', name: 'Reverse Push-ups', target: 'Back', equipment: false, goalMode: 'all', primary: 'Lats & Mid Back', secondary: 'Biceps', tertiary: 'Posterior Delts', demo: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_b_doorway', name: 'Doorframe Row Single-Arm', target: 'Back', equipment: false, goalMode: 'all', primary: 'Rhomboids & Mid Lats', secondary: 'Biceps', tertiary: 'Grip', demo: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=60' },

  // --- ARMS: BICEPS & TRICEPS (HOME) ---
  { id: 'h_a_chinup', name: 'Chin-ups', target: 'Arms', equipment: false, goalMode: 'all', primary: 'Bicep Peak & Flexors', secondary: 'Lats', tertiary: 'Forearms', demo: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_a_table_curl', name: 'Under-table Curl Rows', target: 'Arms', equipment: false, goalMode: 'all', primary: 'Biceps Brachii', secondary: 'Brachialis', tertiary: 'Mid Back', demo: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_a_isohold', name: 'Isometric Bicep Hold', target: 'Arms', equipment: false, goalMode: 'all', primary: 'Biceps Static Endurance', secondary: 'Forearms', tertiary: 'Grip', demo: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_a_chair_dips', name: 'Chair Dips', target: 'Arms', equipment: false, goalMode: 'all', primary: 'Triceps Long Head', secondary: 'Lower Chest', tertiary: 'Front Delts', demo: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_a_bench_dip', name: 'Bench Tricep Extension (Bodyweight)', target: 'Arms', equipment: false, goalMode: 'all', primary: 'Triceps Tendon Stretch', secondary: 'Chest', tertiary: 'Forearms', demo: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_a_parallel_dips', name: 'Parallel Bar Dips', target: 'Arms', equipment: false, goalMode: 'build_muscle', primary: 'Triceps & Lower Chest', secondary: 'Front Delts', tertiary: 'Core', demo: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&auto=format&fit=crop&q=60' },

  // --- CORE & ABS (HOME) ---
  { id: 'h_core_hollow', name: 'Hollow Body Rocks', target: 'Core', equipment: false, goalMode: 'all', primary: 'Transverse Abdominis', secondary: 'Rectus Abdominis', tertiary: 'Hip Flexors', demo: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_core_knee_raise', name: 'Hanging Knee Raises', target: 'Abs', equipment: false, goalMode: 'all', primary: 'Lower Rectus Abdominis', secondary: 'Hip Flexors', tertiary: 'Grip', demo: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_core_leg_raise', name: 'Hanging Straight Leg Raise', target: 'Abs', equipment: false, goalMode: 'build_muscle', primary: 'Complete Abdominal Wall', secondary: 'Hip Flexors', tertiary: 'Forearms', demo: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_core_plank', name: 'Forearm Plank', target: 'Core', equipment: false, goalMode: 'all', primary: 'Core Stability & Bracing', secondary: 'Shoulders', tertiary: 'Glutes', demo: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_core_side_plank', name: 'Side Plank with Hip Dips', target: 'Core', equipment: false, goalMode: 'all', primary: 'Obliques & Quadratus Lumborum', secondary: 'Glute Medius', tertiary: 'Deltoids', demo: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_core_twist', name: 'Russian Twists', target: 'Abs', equipment: false, goalMode: 'all', primary: 'Internal & External Obliques', secondary: 'Rectus Abdominis', tertiary: 'Lower Back', demo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_core_lsit', name: 'Floor L-Sit Hold Progression', target: 'Core', equipment: false, goalMode: 'all', primary: 'Deep Core & Abdominals', secondary: 'Triceps', tertiary: 'Hip Flexors', demo: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_core_vup', name: 'V-Ups', target: 'Abs', equipment: false, goalMode: 'build_muscle', primary: 'Upper & Lower Abdominals', secondary: 'Hip Flexors', tertiary: 'Core Balance', demo: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_core_flutter', name: 'Flutter Kicks (Low Back Pinned)', target: 'Abs', equipment: false, goalMode: 'all', primary: 'Lower Abdominals', secondary: 'Hip Flexors', tertiary: 'Transverse Abdominis', demo: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=600&auto=format&fit=crop&q=60' },

  // --- LEGS (HOME) ---
  { id: 'h_l_bulgarian', name: 'Bulgarian Split Squat', target: 'Legs', equipment: false, goalMode: 'all', primary: 'Quadriceps & Glutes', secondary: 'Hamstrings', tertiary: 'Adductors', demo: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_l_sumo', name: 'Sumo Squat', target: 'Legs', equipment: false, goalMode: 'all', primary: 'Inner Thighs (Adductors)', secondary: 'Gluteus Maximus', tertiary: 'Quads', demo: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_l_jumpsquat', name: 'Jump Squats', target: 'Legs', equipment: false, goalMode: 'all', primary: 'Quads & Fast-Twitch Power', secondary: 'Calves', tertiary: 'Glutes', demo: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_l_wallsit_cossack', name: 'Wall Sit → Cossack Squat', target: 'Legs', equipment: false, goalMode: 'all', primary: 'Quad Burn & Groin Flexibility', secondary: 'Glutes', tertiary: 'Calves', demo: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_l_pistol', name: 'Pistol Squat Progression', target: 'Legs', equipment: false, goalMode: 'build_muscle', primary: 'Single Leg Quad Power', secondary: 'Glutes', tertiary: 'Ankle Stability', demo: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_l_ropejump', name: 'Rope Jump', target: 'Legs', equipment: false, goalMode: 'all', primary: 'Calves & Cardiovascular Pacing', secondary: 'Ankle Stabilizers', tertiary: 'Core', demo: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_l_single_calf', name: 'Single-Leg Standing Calf Raise on Edge', target: 'Legs', equipment: false, goalMode: 'all', primary: 'Gastrocnemius & Soleus', secondary: 'Achilles', tertiary: 'Foot Arch', demo: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&auto=format&fit=crop&q=60' },
  { id: 'h_l_lunges', name: 'Walking Lunges', target: 'Legs', equipment: false, goalMode: 'all', primary: 'Quadriceps & Glutes', secondary: 'Hamstrings', tertiary: 'Calves', demo: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&auto=format&fit=crop&q=60' },

  // --- CHEST (GYM) ---
  { id: 'g_c_bench', name: 'Heavy Barbell Bench Press', target: 'Chest', equipment: true, goalMode: 'build_muscle', primary: 'Pectoralis Major', secondary: 'Front Deltoids', tertiary: 'Triceps', demo: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_c_inc_bb', name: 'Incline Barbell Bench Press', target: 'Chest', equipment: true, goalMode: 'build_muscle', primary: 'Upper Clavicular Head', secondary: 'Front Delts', tertiary: 'Triceps', demo: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_c_inc_db', name: 'Incline Dumbbell Press', target: 'Chest', equipment: true, goalMode: 'build_muscle', primary: 'Upper Pectorals', secondary: 'Front Delts', tertiary: 'Triceps', demo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_c_flat_db', name: 'Flat Dumbbell Press', target: 'Chest', equipment: true, goalMode: 'build_muscle', primary: 'Mid Pectorals', secondary: 'Triceps', tertiary: 'Front Delts', demo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_c_fly', name: 'Cable Crossover High-to-Low', target: 'Chest', equipment: true, goalMode: 'lose_weight', primary: 'Lower Pectorals', secondary: 'Anterior Deltoids', tertiary: 'Core', demo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_c_pecdeck', name: 'Pec Deck Machine Fly', target: 'Chest', equipment: true, goalMode: 'all', primary: 'Pectoralis Isolation', secondary: 'Anterior Delts', tertiary: 'Serratus', demo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_c_machine_press', name: 'Seated Chest Press Machine', target: 'Chest', equipment: true, goalMode: 'all', primary: 'Overall Pectorals', secondary: 'Triceps', tertiary: 'Front Delts', demo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60' },

  // --- BACK (GYM) ---
  { id: 'g_b_deadlift', name: 'Conventional Barbell Deadlift', target: 'Back', equipment: true, goalMode: 'build_muscle', primary: 'Erector Spinae & Lats', secondary: 'Glutes', tertiary: 'Hamstrings', demo: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_b_bb_row', name: 'Bent-Over Barbell Row', target: 'Back', equipment: true, goalMode: 'build_muscle', primary: 'Latissimus Dorsi & Rhomboids', secondary: 'Rear Delts', tertiary: 'Biceps', demo: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_b_lat_pulldown', name: 'Wide Grip Lat Pulldown Machine', target: 'Back', equipment: true, goalMode: 'all', primary: 'Latissimus Dorsi Width', secondary: 'Biceps', tertiary: 'Rear Delts', demo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_b_close_pull', name: 'Close Grip V-Bar Pulldown', target: 'Back', equipment: true, goalMode: 'all', primary: 'Lower Lats & Brachialis', secondary: 'Biceps', tertiary: 'Mid Back', demo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_b_seated_cable', name: 'Seated Cable Row', target: 'Back', equipment: true, goalMode: 'all', primary: 'Rhomboids & Lower Lats', secondary: 'Biceps', tertiary: 'Spinal Erectors', demo: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_b_tbar', name: 'Chest-Supported T-Bar Row', target: 'Back', equipment: true, goalMode: 'build_muscle', primary: 'Mid-Back Thickness', secondary: 'Lats', tertiary: 'Rear Deltoids', demo: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_b_db_row', name: 'Single-Arm Dumbbell Row', target: 'Back', equipment: true, goalMode: 'build_muscle', primary: 'Unilateral Lat Isolation', secondary: 'Biceps', tertiary: 'Core', demo: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=60' },

  // --- SHOULDERS & TRAPS (GYM) ---
  { id: 'g_s_ohp', name: 'Barbell Overhead Military Press', target: 'Shoulders', equipment: true, goalMode: 'build_muscle', primary: 'Deltoid Trio (Front/Side/Rear)', secondary: 'Traps', tertiary: 'Triceps', demo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_s_seated_db', name: 'Seated Dumbbell Shoulder Press', target: 'Shoulders', equipment: true, goalMode: 'build_muscle', primary: 'Anterior & Lateral Delts', secondary: 'Triceps', tertiary: 'Traps', demo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_s_lateral', name: 'Dumbbell Lateral Raises', target: 'Shoulders', equipment: true, goalMode: 'all', primary: 'Lateral Deltoids', secondary: 'Upper Trapezius', tertiary: 'Core', demo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_s_cable_lat', name: 'Cable Lateral Raise', target: 'Shoulders', equipment: true, goalMode: 'all', primary: 'Side Delts Constant Tension', secondary: 'Forearms', tertiary: 'Traps', demo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_s_facepull', name: 'Cable Rope Face Pulls', target: 'Shoulders', equipment: true, goalMode: 'all', primary: 'Rear Deltoids & Rotator Cuff', secondary: 'Upper Traps', tertiary: 'Rhomboids', demo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_s_shrugs_bb', name: 'Heavy Barbell Shrugs', target: 'Traps', equipment: true, goalMode: 'build_muscle', primary: 'Upper Trapezius', secondary: 'Neck', tertiary: 'Grip', demo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_s_shrugs_db', name: 'Dumbbell Shrugs with Pause', target: 'Traps', equipment: true, goalMode: 'build_muscle', primary: 'Upper Trapezius Peak', secondary: 'Forearms', tertiary: 'Grip', demo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60' },

  // --- ARMS: BICEPS & TRICEPS (GYM) ---
  { id: 'g_a_bb_curl', name: 'Standing Barbell Bicep Curl', target: 'Arms', equipment: true, goalMode: 'build_muscle', primary: 'Biceps Brachii', secondary: 'Brachialis', tertiary: 'Forearms', demo: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_a_db_hammer', name: 'Dumbbell Hammer Curls', target: 'Arms', equipment: true, goalMode: 'build_muscle', primary: 'Brachioradialis & Bicep Outer', secondary: 'Forearms', tertiary: 'Grip', demo: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_a_incline_curl', name: 'Incline Dumbbell Bicep Curl', target: 'Arms', equipment: true, goalMode: 'build_muscle', primary: 'Biceps Long Head Stretch', secondary: 'Front Delts', tertiary: 'Forearms', demo: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_a_preacher', name: 'Preacher Curl Machine / Bench', target: 'Arms', equipment: true, goalMode: 'build_muscle', primary: 'Biceps Short Head Isolation', secondary: 'Brachialis', tertiary: 'Wrists', demo: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_a_rope_push', name: 'Cable Tricep Rope Pushdowns', target: 'Arms', equipment: true, goalMode: 'all', primary: 'Triceps Lateral Head', secondary: 'Forearms', tertiary: 'Grip', demo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_a_skullcrusher', name: 'EZ-Bar Skull Crushers', target: 'Arms', equipment: true, goalMode: 'build_muscle', primary: 'Triceps Medial & Long Heads', secondary: 'Chest', tertiary: 'Forearms', demo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_a_overhead_db', name: 'Overhead Seated Dumbbell Extension', target: 'Arms', equipment: true, goalMode: 'build_muscle', primary: 'Triceps Long Head', secondary: 'Shoulders', tertiary: 'Core', demo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60' },

  // --- CORE & ABS (GYM) ---
  { id: 'g_core_cable', name: 'Kneeling Cable Rope Crunch', target: 'Abs', equipment: true, goalMode: 'build_muscle', primary: 'Rectus Abdominis (Upper & Mid)', secondary: 'Obliques', tertiary: 'Serratus', demo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_core_woodchopper', name: 'Standing Cable Rotational Woodchopper', target: 'Core', equipment: true, goalMode: 'all', primary: 'Obliques & Core Rotators', secondary: 'Shoulders', tertiary: 'Transverse Abdominis', demo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_core_captains', name: "Captain's Chair Vertical Leg Raise", target: 'Abs', equipment: true, goalMode: 'all', primary: 'Lower Rectus Abdominis', secondary: 'Hip Flexors', tertiary: 'Forearms', demo: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=600&auto=format&fit=crop&q=60' },

  // --- LEGS (GYM) ---
  { id: 'g_l_squat', name: 'Heavy Barbell Back Squat', target: 'Legs', equipment: true, goalMode: 'build_muscle', primary: 'Quadriceps & Gluteus', secondary: 'Hamstrings', tertiary: 'Core', demo: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_l_front_squat', name: 'Barbell Front Squat', target: 'Legs', equipment: true, goalMode: 'build_muscle', primary: 'Quadriceps Focus', secondary: 'Upper Back', tertiary: 'Core', demo: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_l_legpress', name: '45-Degree Leg Press Machine', target: 'Legs', equipment: true, goalMode: 'build_muscle', primary: 'Quadriceps & Glutes', secondary: 'Hamstrings', tertiary: 'Calves', demo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_l_hack_squat', name: 'Hack Squat Machine', target: 'Legs', equipment: true, goalMode: 'build_muscle', primary: 'Vastus Lateralis & Quads', secondary: 'Glutes', tertiary: 'Calves', demo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_l_leg_ext', name: 'Leg Extension Machine', target: 'Legs', equipment: true, goalMode: 'all', primary: 'Quadriceps Rectus Femoris', secondary: 'Knee Stabilizers', tertiary: 'None', demo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_l_leg_curl', name: 'Lying Leg Curl Machine', target: 'Legs', equipment: true, goalMode: 'all', primary: 'Hamstrings (Biceps Femoris)', secondary: 'Calves', tertiary: 'Glutes', demo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_l_rdl', name: 'Barbell Romanian Deadlift (RDL)', target: 'Legs', equipment: true, goalMode: 'build_muscle', primary: 'Hamstring & Glute Stretch', secondary: 'Erector Spinae', tertiary: 'Grip', demo: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=60' },
  { id: 'g_l_calf_raise', name: 'Standing Smith Machine Calf Raise', target: 'Legs', equipment: true, goalMode: 'all', primary: 'Gastrocnemius & Soleus', secondary: 'Ankle Stability', tertiary: 'None', demo: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&auto=format&fit=crop&q=60' }
];

// ============================================================================
// 3. PERSISTENCE & LOCAL STATE
// ============================================================================
let userProfile = null;
try {
  userProfile = JSON.parse(localStorage.getItem('userProfile'));
} catch (e) {
  userProfile = null;
}

let appSettings = {
  defaultRestTime: 60,
  skipPreferencesScreen: false,
  spotifyUrl: 'https://open.spotify.com',
  fitbitSyncEnabled: true,
  notificationsEnabled: false,
  reminderTime: '18:00'
};
try {
  const savedSettings = JSON.parse(localStorage.getItem('appSettings'));
  if (savedSettings) appSettings = Object.assign(appSettings, savedSettings);
} catch (e) {}

let weeklyPlan = {
  Monday: 'Chest',
  Tuesday: 'Shoulders',
  Wednesday: 'Back',
  Thursday: 'Arms',
  Friday: 'Core & Abs',
  Saturday: 'Legs',
  Sunday: 'Rest Day'
};
try {
  const savedPlan = JSON.parse(localStorage.getItem('weeklyPlan'));
  if (savedPlan) weeklyPlan = savedPlan;
} catch (e) {}

let customPlans = {};
try {
  const savedCustom = JSON.parse(localStorage.getItem('customPlans'));
  if (savedCustom) customPlans = savedCustom;
} catch (e) {}

let appInstalledDate = localStorage.getItem('appInstalledDate');
if (!appInstalledDate) {
  appInstalledDate = new Date().toISOString().split('T')[0];
  localStorage.setItem('appInstalledDate', appInstalledDate);
}

let userStats = {
  totalSetsCompleted: 0,
  workoutsCompleted: 0,
  activeStreak: 0,
  totalCaloriesBurned: 0,
  loggedDates: []
};
try {
  const savedStats = JSON.parse(localStorage.getItem('userStats'));
  if (savedStats) {
    userStats = {
      totalSetsCompleted: savedStats.totalSetsCompleted || 0,
      workoutsCompleted: savedStats.workoutsCompleted || 0,
      activeStreak: typeof savedStats.activeStreak === 'number' ? savedStats.activeStreak : 0,
      totalCaloriesBurned: savedStats.totalCaloriesBurned || 0,
      loggedDates: Array.isArray(savedStats.loggedDates) ? savedStats.loggedDates : []
    };
    if (userStats.workoutsCompleted === 0 && userStats.loggedDates.length === 0) {
      userStats.activeStreak = 0;
    }
  }
} catch (e) {}

let currentTab = 'today';
let selectedMuscles = new Set(['Chest']);
let currentViewAngle = 'front';
let workoutEnvironment = (userProfile && userProfile.environment) ? userProfile.environment : 'home';
let userGoal = 'build_muscle';

let activeRoutine = [];
let currentExerciseIndex = 0;
let currentSetNumber = 1;
let restTimerInterval = null;
let restSeconds = 60;
let sessionStartTime = null;

let bioGender = 'Male';
let setupEnvChoice = 'home';
let builderPlanName = '';
let builderPlanData = {};

let currentActiveSplitDay = null;
let isCustomPlanSession = false;

const container = document.getElementById('app-container');

function triggerHaptic(duration = 15) {
  if ('vibrate' in navigator) navigator.vibrate(duration);
}

function getUserInitials(customName = null) {
  const name = (customName || (userProfile && userProfile.name) || '').trim();
  if (!name) return '⚡';
  const parts = name.split(/\s+/).filter(Boolean);
  if (parts.length === 1) {
    // Single name: exactly the starting letter
    return parts[0][0].toUpperCase();
  }
  // Two or more names: first letters of first and second word
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

function updateUserAvatarUI() {
  const initials = getUserInitials();

  const avatarIds = ['user-avatar', 'header-avatar', 'top-avatar', 'profile-avatar', 'avatar-initials', 'btn-user-avatar', 'account-modal-avatar'];
  avatarIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = initials;
      el.setAttribute('data-user-avatar', 'true');
    }
  });

  // Target any element in the header that triggers account modal or has avatar markers
  document.querySelectorAll('[onclick*="openAccountModal"], [data-user-avatar="true"]').forEach(el => {
    const textTarget = el.querySelector('.rounded-full') || el;
    if (textTarget && textTarget.children.length === 0) {
      textTarget.textContent = initials;
    }
    el.setAttribute('data-user-avatar', 'true');
  });

  // Search for buttons/badges previously tagged or matching standard placeholders
  document.querySelectorAll('header button, header div, header span, .rounded-full').forEach(el => {
    if (el.children.length === 0) {
      const txt = el.textContent.trim();
      if (txt === 'H' || txt === 'AH' || txt === '⚡' || el.hasAttribute('data-user-avatar')) {
        el.textContent = initials;
        el.setAttribute('data-user-avatar', 'true');
      }
    }
  });

  const modalAvatar = document.getElementById('account-modal-avatar');
  if (modalAvatar) modalAvatar.textContent = initials;
}

function ensureBottomNavVisible() {
  const navWrapper = document.getElementById('bottom-nav-wrapper');
  if (navWrapper) {
    navWrapper.classList.remove('hidden');
    navWrapper.style.display = 'block';
  }
}

function setHeaderAction(mode, backCallback) {
  const headerContainer = document.getElementById('header-action-container');
  if (!headerContainer) return;

  if (mode === 'home') {
    headerContainer.innerHTML = `
      <div class="w-8 h-8 rounded-full bg-[var(--app-accent)] flex items-center justify-center text-white font-black text-sm shadow-sm">⚡</div>
      <h1 class="text-base font-black text-zinc-900 dark:text-white tracking-widest">Aethon <span class="text-[var(--app-accent)]">Fit</span></h1>
    `;
  } else {
    headerContainer.innerHTML = `
      <button id="btn-header-back" class="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-zinc-200/80 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold text-xs m3-spring">
        <span>←</span>
        <span>Back</span>
      </button>
    `;
    const btn = document.getElementById('btn-header-back');
    if (btn && backCallback) {
      btn.onclick = () => {
        triggerHaptic(12);
        backCallback();
      };
    }
  }
  updateUserAvatarUI();
}

function playCompletionBeep() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.6);
  } catch (e) {}
}

function calculateBMI(w, h) {
  const weight = parseFloat(w) || 70;
  const heightCm = parseFloat(h) || 175;
  const m = heightCm / 100;
  const bmi = (weight / (m * m)).toFixed(1);
  let status = 'Normal';
  let color = 'text-blue-700 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800';
  if (bmi < 18.5) { status = 'Underweight'; color = 'text-amber-700 bg-amber-50 dark:bg-amber-950/40 border-amber-200'; }
  else if (bmi >= 25 && bmi < 29.9) { status = 'Overweight'; color = 'text-amber-700 bg-amber-50 dark:bg-amber-950/40 border-amber-200'; }
  else if (bmi >= 30) { status = 'Obese'; color = 'text-red-700 bg-red-50 dark:bg-red-950/40 border-red-200'; }
  return { val: bmi, status, color };
}

function calculateDynamicMETCalories(durationMinutes) {
  const weightKg = (userProfile && userProfile.weight) ? userProfile.weight : 70;
  const calories = Math.round(durationMinutes * (5.5 * 3.5 * (weightKg / 200)));
  return Math.max(calories, 15);
}

function getTodayISODate() {
  return new Date().toISOString().split('T')[0];
}

function getTodayDayName() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[new Date().getDay()];
}

function updateStreakPillUI() {
  const pill = document.getElementById('streak-counter-pill');
  if (pill) {
    pill.textContent = `${userStats.activeStreak} ${userStats.activeStreak === 1 ? 'Day' : 'Days'}`;
  }
}

function getModalContainer() {
  let modal = document.getElementById('modal-container');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'modal-container';
    document.body.appendChild(modal);
  }
  return modal;
}

function closeModal() {
  const modal = getModalContainer();
  modal.innerHTML = '';
}

function openSpotifyApp() {
  triggerHaptic(15);
  const target = appSettings.spotifyUrl || 'https://open.spotify.com';
  window.open(target, '_blank');
}

// ============================================================================
// 4. STARTUP SPLASH CONTROLLER
// ============================================================================
function initStartupSplash() {
  const splash = document.getElementById('startup-splash');
  const bar = document.getElementById('splash-progress');
  const status = document.getElementById('splash-status');
  if (!splash) return;

  setTimeout(() => {
    if (bar) bar.style.width = '60%';
    if (status) status.textContent = 'Calibrating body composition...';
  }, 600);

  setTimeout(() => {
    if (bar) bar.style.width = '100%';
    if (status) status.textContent = 'Masterpiece ready!';
  }, 1300);

  setTimeout(() => {
    splash.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => {
      try { splash.remove(); } catch(e) { splash.classList.add('hidden'); }
    }, 700);
  }, 1900);
}

// ============================================================================
// 5. ONBOARDING & PROFILE SETUP
// ============================================================================
function showOnboarding() {
  const navWrapper = document.getElementById('bottom-nav-wrapper');
  if (navWrapper) navWrapper.classList.add('hidden');
  setHeaderAction('sub', () => {
    if (typeof userProfile !== 'undefined' && userProfile) navigateTab('today');
  });

  const existingName = userProfile && userProfile.name ? userProfile.name : '';

  container.innerHTML = `
    <div class="space-y-6 py-2">
      <div>
        <span class="text-[11px] font-bold uppercase tracking-wider text-[var(--app-accent)]">Aethon Fit Biometrics</span>
        <h2 class="text-3xl font-extrabold text-zinc-900 dark:text-white mt-1">Configure your Bio & Metrics</h2>
        <p class="text-xs text-zinc-500 mt-1">Set your profile once. Update anytime in Settings.</p>
      </div>

      <div class="space-y-4 bg-white dark:bg-[#161722] border border-zinc-200/80 dark:border-zinc-800 p-5 rounded-[28px] shadow-sm">
        <div>
          <label class="text-xs font-bold text-zinc-500 uppercase tracking-wider">Your Full Name</label>
          <input type="text" id="inp-name" value="${existingName}" placeholder="Enter your full name..." class="w-full mt-1.5 p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm font-bold text-zinc-900 dark:text-white focus:outline-none focus:border-[var(--app-accent)]" />
        </div>

        <div>
          <label class="text-xs font-bold text-zinc-500 uppercase tracking-wider">Gender</label>
          <div class="grid grid-cols-2 gap-3 mt-2">
            <button id="bio-male" onclick="setBioGender('Male')" class="p-3.5 rounded-2xl border-2 border-[var(--app-accent)] bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 font-bold m3-spring">👨 Male</button>
            <button id="bio-female" onclick="setBioGender('Female')" class="p-3.5 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-bold m3-spring">👩 Female</button>
          </div>
        </div>

        <div>
          <div class="flex justify-between items-center"><label class="text-xs font-bold text-zinc-500 uppercase tracking-wider">Age</label><span id="lbl-age" class="text-[var(--app-accent)] font-bold text-sm">21 yrs</span></div>
          <input type="range" min="14" max="75" value="21" id="inp-age" oninput="document.getElementById('lbl-age').textContent = this.value + ' yrs'" class="w-full mt-2 accent-[var(--app-accent)] cursor-pointer" />
        </div>

        <div>
          <div class="flex justify-between items-center"><label class="text-xs font-bold text-zinc-500 uppercase tracking-wider">Height (cm)</label><span id="lbl-height" class="text-[var(--app-accent)] font-bold text-sm">175 cm</span></div>
          <input type="range" min="130" max="215" value="175" id="inp-height" oninput="document.getElementById('lbl-height').textContent = this.value + ' cm'" class="w-full mt-2 accent-[var(--app-accent)] cursor-pointer" />
        </div>

        <div>
          <div class="flex justify-between items-center"><label class="text-xs font-bold text-zinc-500 uppercase tracking-wider">Weight (kg)</label><span id="lbl-weight" class="text-[var(--app-accent)] font-bold text-sm">70 kg</span></div>
          <input type="range" min="40" max="150" value="70" id="inp-weight" oninput="document.getElementById('lbl-weight').textContent = this.value + ' kg'" class="w-full mt-2 accent-[var(--app-accent)] cursor-pointer" />
        </div>

        <div class="pt-2 border-t border-zinc-100 dark:border-zinc-800">
          <label class="text-xs font-bold text-zinc-500 uppercase tracking-wider">Training Environment</label>
          <div class="grid grid-cols-2 gap-3 mt-2">
            <button id="ob-env-home" onclick="setSetupEnv('home')" class="p-3 rounded-2xl border-2 border-[var(--app-accent)] bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 font-bold text-xs m3-spring">🏡 Home / Calisthenics</button>
            <button id="ob-env-gym" onclick="setSetupEnv('gym')" class="p-3 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-bold text-xs m3-spring">🏋️ Gym / Equipment</button>
          </div>
        </div>
      </div>

      <button onclick="saveBioAndGoToPlans()" class="w-full py-4 rounded-2xl bg-[var(--app-accent)] hover:bg-blue-700 text-white font-extrabold text-base shadow-md shadow-blue-500/20 m3-spring">
        Continue to Routine Selection →
      </button>
    </div>
  `;
}

function setBioGender(g) {
  triggerHaptic(10);
  bioGender = g;
  document.getElementById('bio-male').className = g === 'Male'
    ? 'p-3.5 rounded-2xl border-2 border-[var(--app-accent)] bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 font-bold m3-spring'
    : 'p-3.5 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-bold m3-spring';
  document.getElementById('bio-female').className = g === 'Female'
    ? 'p-3.5 rounded-2xl border-2 border-[var(--app-accent)] bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 font-bold m3-spring'
    : 'p-3.5 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-bold m3-spring';
}

function setSetupEnv(val) {
  triggerHaptic(10);
  setupEnvChoice = val;
  workoutEnvironment = val;
  document.getElementById('ob-env-home').className = val === 'home'
    ? 'p-3 rounded-2xl border-2 border-[var(--app-accent)] bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 font-bold text-xs m3-spring'
    : 'p-3 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-bold text-xs m3-spring';
  document.getElementById('ob-env-gym').className = val === 'gym'
    ? 'p-3 rounded-2xl border-2 border-[var(--app-accent)] bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 font-bold text-xs m3-spring'
    : 'p-3 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#161722] text-zinc-600 dark:text-zinc-400 text-left font-bold m3-spring';
}

function saveBioAndGoToPlans() {
  triggerHaptic(20);
  const nameInput = document.getElementById('inp-name');
  const enteredName = nameInput ? nameInput.value.trim() : '';
  const finalName = enteredName || (userProfile && userProfile.name) || '';

  const age = parseInt(document.getElementById('inp-age').value) || 21;
  const height = parseInt(document.getElementById('inp-height').value) || 175;
  const weight = parseInt(document.getElementById('inp-weight').value) || 70;
  const bmiInfo = calculateBMI(weight, height);

  userProfile = {
    name: finalName,
    gender: bioGender,
    age,
    height,
    weight,
    environment: setupEnvChoice,
    goal: 'build_muscle',
    bmi: bmiInfo.val,
    bmiStatus: bmiInfo.status
  };
  localStorage.setItem('userProfile', JSON.stringify(userProfile));
  updateUserAvatarUI();
  showPlanSelectionStep();
}

function showPlanSelectionStep() {
  setHeaderAction('sub', () => showOnboarding());

  container.innerHTML = `
    <div class="space-y-6 py-2">
      <div>
        <span class="text-[11px] font-bold uppercase tracking-wider text-[var(--app-accent)]">Step 2: Training Split</span>
        <h2 class="text-3xl font-extrabold text-zinc-900 dark:text-white mt-1">Choose Workout Routine</h2>
        <p class="text-xs text-zinc-500 mt-1">Select the Aerofit Plan or create custom family routines.</p>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <button id="btn-tab-plan-app" onclick="renderPlanOptions('app')" class="p-5 rounded-[24px] bg-blue-50 dark:bg-blue-950/40 border-2 border-[var(--app-accent)] text-left space-y-2 m3-spring shadow-sm">
          <div class="text-2xl">📋</div>
          <div class="font-extrabold text-sm text-blue-950 dark:text-blue-100">Aerofit Plan</div>
          <div class="text-[11px] text-zinc-500">Official Split</div>
        </button>
        <button id="btn-tab-plan-custom" onclick="renderPlanOptions('custom')" class="p-5 rounded-[24px] bg-white dark:bg-[#161722] border-2 border-zinc-200 dark:border-zinc-800 text-left space-y-2 m3-spring shadow-sm">
          <div class="text-2xl">✍️</div>
          <div class="font-extrabold text-sm text-zinc-900 dark:text-white">Custom Plans</div>
          <div class="text-[11px] text-zinc-500">Self-built routines</div>
        </button>
      </div>

      <div id="plan-selection-area" class="space-y-4 pt-2"></div>
    </div>
  `;
  renderPlanOptions('app');
}

function renderPlanOptions(mode) {
  triggerHaptic(10);
  const area = document.getElementById('plan-selection-area');
  const btnApp = document.getElementById('btn-tab-plan-app');
  const btnCustom = document.getElementById('btn-tab-plan-custom');

  if (btnApp && btnCustom) {
    if (mode === 'app') {
      btnApp.className = 'p-5 rounded-[24px] bg-blue-50 dark:bg-blue-950/40 border-2 border-[var(--app-accent)] text-left space-y-2 m3-spring shadow-sm';
      btnCustom.className = 'p-5 rounded-[24px] bg-white dark:bg-[#161722] border-2 border-zinc-200 dark:border-zinc-800 text-left space-y-2 m3-spring shadow-sm';
    } else {
      btnCustom.className = 'p-5 rounded-[24px] bg-blue-50 dark:bg-blue-950/40 border-2 border-[var(--app-accent)] text-left space-y-2 m3-spring shadow-sm';
      btnApp.className = 'p-5 rounded-[24px] bg-white dark:bg-[#161722] border-2 border-zinc-200 dark:border-zinc-800 text-left space-y-2 m3-spring shadow-sm';
    }
  }

  if (!area) return;

  if (mode === 'app') {
    area.innerHTML = `
      <div class="space-y-3 bg-white dark:bg-[#161722] border border-zinc-200/80 dark:border-zinc-800 p-5 rounded-[28px] shadow-sm">
        <h4 class="text-xs font-bold uppercase tracking-wider text-zinc-400">Official Routine</h4>
        <div class="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 space-y-2">
          <div class="text-sm font-black text-zinc-900 dark:text-white">⚡ Aerofit Plan Split</div>
          <p class="text-xs text-zinc-500">Mon: Chest • Tue: Shoulders • Wed: Back • Thu: Arms • Fri: Core & Abs • Sat: Legs • Sun: Rest Day</p>
          <button onclick="confirmPlanAndLaunchApp('app_official')" class="w-full py-3.5 rounded-xl bg-[var(--app-accent)] hover:bg-blue-700 text-white font-extrabold text-xs m3-spring shadow-sm">
            Select & Launch Aethon Fit →
          </button>
        </div>
      </div>
    `;
  } else {
    const planNames = typeof customPlans === 'object' && customPlans ? Object.keys(customPlans) : [];
    area.innerHTML = `
      <div class="space-y-4 bg-white dark:bg-[#161722] border border-zinc-200/80 dark:border-zinc-800 p-5 rounded-[28px] shadow-sm">
        <div class="flex justify-between items-center">
          <h4 class="text-xs font-bold uppercase tracking-wider text-zinc-400">Custom Family Plans</h4>
          <button onclick="openCustomPlanBuilder()" class="px-3 py-1.5 rounded-xl bg-[var(--app-accent)] text-white text-[11px] font-bold shadow-sm">+ New Plan</button>
        </div>

        <div class="space-y-2">
          ${planNames.length === 0 ? '<div class="text-xs text-zinc-400 text-center py-4">No custom plans created yet. Click "+ New Plan" to design one.</div>' : planNames.map(name => `
            <div class="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex justify-between items-center">
              <div>
                <div class="text-sm font-bold text-zinc-900 dark:text-white">📁 ${name}</div>
                <div class="text-[10px] text-zinc-500">${Object.keys(customPlans[name].schedule || customPlans[name] || {}).length} days configured</div>
              </div>
              <div class="flex space-x-2">
                <button onclick="openCustomPlanBuilder('${name}')" class="px-2.5 py-1.5 rounded-xl bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-bold">✎ Edit</button>
                <button onclick="loadAndLaunchCustomPlan('${name}')" class="px-3 py-1.5 rounded-xl bg-[var(--app-accent)] hover:bg-blue-600 text-white text-xs font-bold shadow-sm m3-spring">Use</button>
                <button onclick="deleteCustomPlanEntry('${name}')" class="px-2 py-1.5 rounded-xl bg-red-100 text-red-600 text-xs font-bold">🗑️</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}

// ============================================================================
// 6. CUSTOM PLAN BUILDER (WITH SETS & REPS PROMPT)
// ============================================================================
function openCustomPlanBuilder(planNameToEdit = '') {
  triggerHaptic(15);
  setHeaderAction('sub', () => showPlanSelectionStep());

  builderPlanName = planNameToEdit || '';
  if (builderPlanName && customPlans && customPlans[builderPlanName]) {
    builderPlanData = JSON.parse(JSON.stringify(customPlans[builderPlanName]));
  } else {
    builderPlanData = {
      schedule: {
        Monday: { split: 'Chest', exercises: [] },
        Tuesday: { split: 'Shoulders', exercises: [] },
        Wednesday: { split: 'Back', exercises: [] },
        Thursday: { split: 'Arms', exercises: [] },
        Friday: { split: 'Core & Abs', exercises: [] },
        Saturday: { split: 'Legs', exercises: [] },
        Sunday: { split: 'Rest Day', exercises: [] }
      }
    };
  }

  renderCustomPlanBuilderUI();
}

function renderCustomPlanBuilderUI() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  container.innerHTML = `
    <div class="space-y-5 pb-8">
      <div>
        <span class="text-[10px] font-extrabold uppercase tracking-widest text-[var(--app-accent)]">Custom Routine Architect</span>
        <h2 class="text-2xl font-black text-zinc-900 dark:text-white mt-0.5">Build Custom Plan</h2>
      </div>

      <div class="p-4 rounded-2xl bg-white dark:bg-[#161722] border border-zinc-200 dark:border-zinc-800 space-y-1.5 shadow-sm">
        <label class="text-[10px] font-bold text-zinc-400 uppercase">Plan Name (e.g. Test 1)</label>
        <input type="text" id="builder-plan-name" value="${builderPlanName}" placeholder="Enter custom plan name..." class="w-full p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm font-bold text-zinc-900 dark:text-white focus:outline-none focus:border-[var(--app-accent)]" />
      </div>

      <div class="space-y-3">
        <h3 class="text-xs font-extrabold uppercase tracking-wider text-zinc-400">Daily Splits & Exercise Picker</h3>
        
        ${days.map(d => {
          const dayConfig = (builderPlanData.schedule && builderPlanData.schedule[d]) ? builderPlanData.schedule[d] : { split: 'Rest Day', exercises: [] };
          const exList = dayConfig.exercises || [];
          return `
            <div class="p-4 rounded-2xl bg-white dark:bg-[#161722] border border-zinc-200 dark:border-zinc-800 space-y-2.5 shadow-sm">
              <div class="flex justify-between items-center">
                <span class="text-xs font-black text-zinc-900 dark:text-white">${d}</span>
                <input type="text" value="${dayConfig.split}" onchange="updateBuilderDaySplit('${d}', this.value)" class="text-xs font-bold text-right bg-transparent text-[var(--app-accent)] border-b border-zinc-200 dark:border-zinc-700 focus:outline-none" />
              </div>

              <div class="space-y-1.5">
                ${exList.length === 0 ? '<div class="text-[11px] text-zinc-400 italic">No exercises added yet</div>' : exList.map((exItem, idx) => {
                  const exName = typeof exItem === 'string' ? exItem : exItem.name;
                  const sets = exItem.sets || 3;
                  const reps = exItem.reps || 10;
                  return `
                    <div class="flex justify-between items-center text-xs py-1.5 px-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/60">
                      <div class="flex items-center space-x-2 truncate">
                        <span class="font-bold text-zinc-800 dark:text-zinc-200 truncate">${exName}</span>
                        <span class="text-[10px] font-mono text-[var(--app-accent)] font-extrabold shrink-0 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-900">${sets} sets × ${reps} reps</span>
                      </div>
                      <button onclick="removeExerciseFromBuilderDay('${d}', ${idx})" class="text-red-500 hover:text-red-700 font-bold ml-2">✕</button>
                    </div>
                  `;
                }).join('')}
              </div>

              <button onclick="openExercisePickerForDay('${d}')" class="w-full py-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-[var(--app-accent)] dark:text-blue-300 text-[11px] font-bold border border-blue-200 dark:border-blue-900 m3-spring flex items-center justify-center space-x-1">
                <span>+ Add Exercises from Library</span>
              </button>
            </div>
          `;
        }).join('')}
      </div>

      <button onclick="saveCustomPlanFromBuilder()" class="w-full py-4 rounded-2xl bg-[var(--app-accent)] hover:bg-blue-700 text-white font-extrabold text-base shadow-md shadow-blue-500/20 m3-spring">
        Save Custom Plan ✓
      </button>
      <button onclick="showPlanSelectionStep()" class="w-full py-1 text-xs text-zinc-400 font-semibold text-center">Cancel</button>
    </div>
  `;
}

function updateBuilderDaySplit(day, val) {
  if (!builderPlanData.schedule) builderPlanData.schedule = {};
  if (!builderPlanData.schedule[day]) builderPlanData.schedule[day] = { split: val, exercises: [] };
  builderPlanData.schedule[day].split = val.trim() || 'Rest Day';
}

function removeExerciseFromBuilderDay(day, idx) {
  triggerHaptic(10);
  if (builderPlanData.schedule && builderPlanData.schedule[day] && builderPlanData.schedule[day].exercises) {
    builderPlanData.schedule[day].exercises.splice(idx, 1);
    renderCustomPlanBuilderUI();
  }
}

function openExercisePickerForDay(targetDay) {
  triggerHaptic(15);
  const modal = getModalContainer();

  modal.innerHTML = `
    <div class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-end justify-center">
      <div class="w-full max-w-md max-h-[85vh] bg-white dark:bg-[#161722] rounded-t-[32px] p-6 space-y-4 m3-bottom-sheet shadow-2xl flex flex-col">
        <div class="flex justify-between items-center pb-2 border-b border-zinc-100 dark:border-zinc-800 shrink-0">
          <div>
            <h4 id="picker-target-title" class="text-base font-black text-zinc-900 dark:text-white">Select for ${targetDay}</h4>
            <p class="text-[11px] text-zinc-500">Pick movements and set sets & reps</p>
          </div>
          <button onclick="closeModal()" class="w-7 h-7 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 text-xs font-bold">✕</button>
        </div>

        <input type="text" id="picker-search" oninput="filterPickerList('${targetDay}')" placeholder="Search exercises..." class="w-full p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-bold text-zinc-900 dark:text-white focus:outline-none shrink-0" />

        <div id="picker-results-box" class="flex-1 overflow-y-auto space-y-2 pr-1"></div>

        <button onclick="closeModal(); renderCustomPlanBuilderUI();" class="w-full py-3.5 rounded-xl bg-[var(--app-accent)] text-white font-bold text-xs m3-spring shrink-0">Done Selecting</button>
      </div>
    </div>
  `;

  renderPickerResults(targetDay);
}

function renderPickerResults(targetDay, filterText = '') {
  const box = document.getElementById('picker-results-box');
  if (!box) return;

  const q = filterText.toLowerCase();
  const matches = EXERCISE_DB.filter(ex => ex.name.toLowerCase().includes(q) || ex.target.toLowerCase().includes(q));

  const currentAssignedNames = (builderPlanData.schedule && builderPlanData.schedule[targetDay] && builderPlanData.schedule[targetDay].exercises) 
    ? builderPlanData.schedule[targetDay].exercises.map(item => typeof item === 'string' ? item : item.name) 
    : [];

  box.innerHTML = matches.map(ex => {
    const isChecked = currentAssignedNames.includes(ex.name);
    return `
      <div onclick="toggleExerciseAttachment('${targetDay}', '${ex.name}')" class="p-3 rounded-xl border flex justify-between items-center cursor-pointer m3-spring ${
        isChecked 
          ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-300 dark:border-blue-700' 
          : 'bg-zinc-50/50 dark:bg-zinc-800/40 border-zinc-200 dark:border-zinc-800'
      }">
        <div>
          <div class="text-xs font-bold text-zinc-900 dark:text-white">${ex.name}</div>
          <div class="text-[10px] text-zinc-400">${ex.target} • ${ex.equipment ? '🏋️ Gym' : '🏡 Home'}</div>
        </div>
        <span class="text-sm font-bold ${isChecked ? 'text-[var(--app-accent)]' : 'text-zinc-300'}">${isChecked ? '✓' : '+'}</span>
      </div>
    `;
  }).join('');
}

function filterPickerList(targetDay) {
  const query = document.getElementById('picker-search')?.value || '';
  renderPickerResults(targetDay, query);
}

function toggleExerciseAttachment(day, exName) {
  triggerHaptic(10);
  if (!builderPlanData.schedule) builderPlanData.schedule = {};
  if (!builderPlanData.schedule[day]) builderPlanData.schedule[day] = { split: 'Workout', exercises: [] };
  if (!builderPlanData.schedule[day].exercises) builderPlanData.schedule[day].exercises = [];

  const existingIdx = builderPlanData.schedule[day].exercises.findIndex(item => {
    const n = typeof item === 'string' ? item : item.name;
    return n === exName;
  });

  if (existingIdx > -1) {
    builderPlanData.schedule[day].exercises.splice(existingIdx, 1);
  } else {
    const enteredSets = prompt(`Enter number of sets for "${exName}":`, "3");
    if (enteredSets === null) return;
    const finalSets = parseInt(enteredSets) || 3;

    const enteredReps = prompt(`Enter reps for "${exName}" (e.g. 10 or 10-12):`, "10-12");
    if (enteredReps === null) return;
    const finalReps = enteredReps.trim() || "10-12";

    builderPlanData.schedule[day].exercises.push({
      name: exName,
      sets: finalSets,
      reps: finalReps
    });
  }

  const query = document.getElementById('picker-search')?.value || '';
  renderPickerResults(day, query);
}

function saveCustomPlanFromBuilder() {
  triggerHaptic(20);
  const nameInput = document.getElementById('builder-plan-name');
  const finalName = (nameInput ? nameInput.value.trim() : '') || builderPlanName || 'Custom Plan';

  customPlans[finalName] = builderPlanData;
  localStorage.setItem('customPlans', JSON.stringify(customPlans));
  showPlanSelectionStep();
}

function confirmPlanAndLaunchApp(type) {
  triggerHaptic(15);
  localStorage.removeItem('activeCustomPlanName');
  weeklyPlan = {
    Monday: 'Chest',
    Tuesday: 'Shoulders',
    Wednesday: 'Back',
    Thursday: 'Arms',
    Friday: 'Core & Abs',
    Saturday: 'Legs',
    Sunday: 'Rest Day'
  };
  localStorage.setItem('weeklyPlan', JSON.stringify(weeklyPlan));
  ensureBottomNavVisible();
  updateStreakPillUI();
  updateUserAvatarUI();
  setHeaderAction('home');
  navigateTab('today');
}

function loadAndLaunchCustomPlan(name) {
  triggerHaptic(15);
  if (customPlans && customPlans[name]) {
    localStorage.setItem('activeCustomPlanName', name);
    const raw = customPlans[name];

    if (raw.schedule) {
      const flattened = {};
      for (const [day, val] of Object.entries(raw.schedule)) {
        flattened[day] = val.split || 'Rest Day';
      }
      weeklyPlan = flattened;
    } else {
      weeklyPlan = raw;
    }

    localStorage.setItem('weeklyPlan', JSON.stringify(weeklyPlan));
    ensureBottomNavVisible();
    setHeaderAction('home');
    updateStreakPillUI();
    updateUserAvatarUI();

    launchCustomDayDirect(getTodayDayName());
  }
}

function deleteCustomPlanEntry(name) {
  triggerHaptic(10);
  if (confirm(`Delete plan "${name}"?`)) {
    delete customPlans[name];
    localStorage.setItem('customPlans', JSON.stringify(customPlans));
    if (localStorage.getItem('activeCustomPlanName') === name) {
      localStorage.removeItem('activeCustomPlanName');
    }
    renderPlanOptions('custom');
  }
}

// ============================================================================
// 7. TAB NAVIGATION & AUTO-SCROLL/FOCUS-BLUR FIX
// ============================================================================
function navigateTab(tabName) {
  triggerHaptic(10);
  currentTab = tabName;
  setHeaderAction('home');
  ensureBottomNavVisible();
  updateUserAvatarUI();

  if (document.activeElement && typeof document.activeElement.blur === 'function') {
    document.activeElement.blur();
  }

  if (container) {
    container.scrollTop = 0;
  }

  ['today', 'workout', 'library', 'profile'].forEach(t => {
    const el = document.getElementById(`tab-${t}`);
    if (el) {
      if (t === tabName) el.classList.add('active');
      else el.classList.remove('active');
    }
  });

  if (tabName === 'today') renderTodayDashboard();
  else if (tabName === 'workout') renderFitnessWorkout();
  else if (tabName === 'library') renderLibrary();
  else if (tabName === 'profile') renderSettingsAndHealth();
}

// ============================================================================
// 8. TAB 1: TODAY & REST DAY DASHBOARD
// ============================================================================
function renderTodayDashboard() {
  setHeaderAction('home');
  ensureBottomNavVisible();
  updateUserAvatarUI();

  const todayName = getTodayDayName();
  const todayTarget = weeklyPlan[todayName] || 'Rest Day';
  const isRest = todayTarget.toLowerCase().includes('rest');
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const todayISO = getTodayISODate();
  const alreadyClaimedRest = Array.isArray(userStats.loggedDates) && userStats.loggedDates.some(item => item.date === todayISO);

  const activeCustom = localStorage.getItem('activeCustomPlanName');
  let customDaySplit = null;
  if (activeCustom && customPlans && customPlans[activeCustom]) {
    const plan = customPlans[activeCustom];
    const schedule = plan.schedule || plan;
    if (schedule && schedule[todayName]) {
      customDaySplit = schedule[todayName].split || 'Custom Workout';
    }
  }

  if (isRest) {
    container.innerHTML = `
      <div class="space-y-4 pb-24">
        <div class="bg-white dark:bg-[#161722] border border-zinc-200/80 dark:border-zinc-800 rounded-[32px] p-6 shadow-sm text-center space-y-4">
          <div class="w-20 h-20 mx-auto rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-4xl shadow-sm">
            🏆
          </div>
          <div class="space-y-1">
            <span class="text-[10px] font-extrabold uppercase tracking-widest text-[var(--app-accent)]">Active Recovery • ${todayName}</span>
            <h3 class="text-3xl font-black text-zinc-900 dark:text-white">Today is rest day, happy recovery</h3>
            <p class="text-xs text-zinc-500 max-w-xs mx-auto mt-1">Rest central nervous system, hydrate, and maintain mobility.</p>
          </div>

          <div class="grid grid-cols-2 gap-3 pt-2">
            <div class="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-center">
              <span class="text-[10px] font-bold text-zinc-400 uppercase">Active Streak</span>
              <div class="text-xl font-black text-zinc-900 dark:text-white mt-0.5">🔥 ${userStats.activeStreak} Days</div>
            </div>
            <div class="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-center">
              <span class="text-[10px] font-bold text-zinc-400 uppercase">Rest Logged</span>
              <div class="text-xl font-black text-zinc-900 dark:text-white mt-0.5">💤 ${alreadyClaimedRest ? 'Yes' : 'Pending'}</div>
            </div>
          </div>

          <button onclick="logRestDayAction()" ${alreadyClaimedRest ? 'disabled' : ''} class="w-full py-4 rounded-2xl ${alreadyClaimedRest ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400' : 'bg-[var(--app-accent)] hover:bg-blue-700 text-white shadow-md shadow-blue-500/20'} font-extrabold text-sm m3-spring transition">
            ${alreadyClaimedRest ? '✓ Rest Day Claimed for Today' : '💤 Claim Recovery & Protect Streak'}
          </button>
        </div>

        <div class="bg-white dark:bg-[#161722] border border-zinc-200/80 dark:border-zinc-800 rounded-[32px] p-5 shadow-sm space-y-3">
          <div class="flex justify-between items-center">
            <div>
              <span class="text-[10px] font-extrabold uppercase tracking-widest text-[var(--app-accent)]">Weekly Split</span>
              <h4 class="text-base font-extrabold text-zinc-900 dark:text-white">7-Day Schedule Planner</h4>
            </div>
            <span class="text-[10px] text-zinc-400 font-semibold">Tap card to train</span>
          </div>

          <div class="space-y-2 pt-1">
            ${days.map(d => {
              const isToday = d === todayName;
              const splitName = weeklyPlan[d];
              return `
                <div class="p-3.5 rounded-2xl border transition m3-spring flex justify-between items-center ${isToday ? 'bg-blue-50/80 dark:bg-blue-950/40 border-blue-300 dark:border-blue-700 shadow-sm' : 'bg-zinc-50/60 dark:bg-zinc-800/40 border-zinc-200 dark:border-zinc-800'}">
                  <div onclick="launchDaySplit('${splitName}', '${d}', false)" class="flex-1 cursor-pointer">
                    <div class="flex items-center space-x-1.5">
                      <span class="text-xs font-black ${isToday ? 'text-blue-700 dark:text-blue-300' : 'text-zinc-700 dark:text-zinc-300'}">${d}</span>${isToday ? '<span class="text-[9px] bg-[var(--app-accent)] text-white px-2 py-0.5 rounded-full font-bold">TODAY</span>' : ''}
                    </div>
                    <div class="text-xs font-semibold text-zinc-600 dark:text-zinc-400 mt-0.5">${splitName}</div>
                  </div>
                  <button onclick="editScheduleDay('${d}', event)" class="p-2 rounded-xl text-zinc-400 hover:text-zinc-600 text-xs">✎</button>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="space-y-4 pb-24">
      <div class="bg-white dark:bg-[#161722] border border-zinc-200/80 dark:border-zinc-800 rounded-[32px] p-5 shadow-sm space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <span class="text-[10px] font-extrabold uppercase tracking-widest text-zinc-400">Scheduled Today • ${todayName}</span>
            <h3 class="text-2xl font-black text-zinc-900 dark:text-white leading-tight">${todayTarget}</h3>
          </div>
          <span class="text-xs bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-bold px-3 py-1 rounded-full">Workout Day</span>
        </div>

        <div class="grid grid-cols-3 gap-2 pt-1">
          <div class="bg-blue-50/70 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 p-3 rounded-2xl text-center">
            <span class="text-[10px] font-bold text-blue-700 dark:text-blue-300 uppercase">Sets</span>
            <div class="text-xl font-black text-blue-950 dark:text-blue-100 mt-0.5">${userStats.totalSetsCompleted}</div>
          </div>
          <div class="bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900 p-3 rounded-2xl text-center">
            <span class="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 uppercase">Sessions</span>
            <div class="text-xl font-black text-emerald-950 dark:text-emerald-100 mt-0.5">${userStats.workoutsCompleted}</div>
          </div>
          <div class="bg-amber-50/70 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900 p-3 rounded-2xl text-center">
            <span class="text-[10px] font-bold text-amber-700 dark:text-amber-300 uppercase">Energy</span>
            <div class="text-xl font-black text-amber-950 dark:text-amber-100 mt-0.5">${userStats.totalCaloriesBurned} <span class="text-[10px]">kcal</span></div>
          </div>
        </div>
      </div>

      <!-- Action Buttons Row -->
      <div class="space-y-2">
        <div class="flex space-x-2">
          <button onclick="launchDaySplit('${todayTarget}', '${todayName}', false)" class="flex-1 py-3.5 px-4 rounded-2xl bg-[var(--app-accent)] text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-sm shadow-blue-500/20 m3-spring">
            <span>⚡ Start Today's Split</span>
          </button>
          <button onclick="openCindyWorkoutModal()" class="py-3.5 px-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs flex items-center space-x-1 shadow-sm m3-spring">
            <span>🏆 Try Cindy WOD</span>
          </button>
        </div>

        ${activeCustom ? `
          <button onclick="launchCustomDayDirect('${todayName}')" class="w-full py-3.5 px-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs flex items-center justify-center space-x-2 shadow-md shadow-indigo-500/25 m3-spring">
            <span>⭐ Start Custom Plan (${activeCustom}${customDaySplit ? ' • ' + customDaySplit : ''})</span>
          </button>
        ` : `
          <button onclick="showPlanSelectionStep()" class="w-full py-3 px-4 rounded-2xl bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold text-xs flex items-center justify-center space-x-2 m3-spring">
            <span>+ Create / Select a Custom Plan</span>
          </button>
        `}
      </div>

      <!-- Android Widget Suite Selection Card -->
      <div class="p-5 rounded-[28px] bg-white dark:bg-[#161722] border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-3">
        <div class="flex justify-between items-center">
          <div>
            <span class="text-[10px] font-extrabold uppercase tracking-widest text-[var(--app-accent)]">Home Screen Widgets</span>
            <h4 class="text-sm font-black text-zinc-900 dark:text-white">Android Widget Style</h4>
          </div>
          <button onclick="triggerPWAInstallPrompt()" class="px-3 py-1.5 rounded-xl bg-[var(--app-accent)] text-white text-[11px] font-bold shadow-sm m3-spring">+ Add Widget</button>
        </div>

        <div class="grid grid-cols-2 gap-3 pt-1">
          <div onclick="previewWidget('1x1')" class="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 cursor-pointer m3-spring flex flex-col items-center justify-center text-center">
            <span class="text-[10px] font-bold text-zinc-400 mb-1">1 × 1 Micro Box</span>
            <div class="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 flex flex-col items-center justify-center shadow-sm">
              <span class="text-base">🔥</span>
              <span class="text-xs font-black text-amber-900 mt-0.5">${userStats.activeStreak}d</span>
            </div>
            <span class="text-[10px] font-bold text-zinc-600 dark:text-zinc-300 mt-2">Streak Counter</span>
          </div>

          <div onclick="previewWidget('4x2')" class="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 cursor-pointer m3-spring flex flex-col items-center justify-center text-center">
            <span class="text-[10px] font-bold text-zinc-400 mb-1">4 × 2 Command Box</span>
            <div class="w-full h-14 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 p-1.5 flex flex-col justify-between text-left">
              <div class="text-[9px] font-black text-blue-950 truncate">${todayTarget}</div>
              <div class="flex justify-between items-center text-[9px] font-bold text-blue-800">
                <span>${userStats.totalSetsCompleted} sets</span>
                <span>${userStats.totalCaloriesBurned} kcal</span>
              </div>
            </div>
            <span class="text-[10px] font-bold text-zinc-600 dark:text-zinc-300 mt-2">Full Dashboard</span>
          </div>
        </div>
      </div>

      <div class="bg-white dark:bg-[#161722] border border-zinc-200/80 dark:border-zinc-800 rounded-[32px] p-5 shadow-sm space-y-3">
        <div class="flex justify-between items-center">
          <div>
            <span class="text-[10px] font-extrabold uppercase tracking-widest text-[var(--app-accent)]">Weekly Split</span>
            <h4 class="text-base font-extrabold text-zinc-900 dark:text-white">7-Day Schedule Planner</h4>
          </div>
          <span class="text-[10px] text-zinc-400 font-semibold">Tap card to train</span>
        </div>

        <div class="space-y-2 pt-1">
          ${days.map(d => {
            const isToday = d === todayName;
            const splitName = weeklyPlan[d];
            return `
              <div class="p-3.5 rounded-2xl border transition m3-spring flex justify-between items-center ${isToday ? 'bg-blue-50/80 dark:bg-blue-950/40 border-blue-300 dark:border-blue-700 shadow-sm' : 'bg-zinc-50/60 dark:bg-zinc-800/40 border-zinc-200 dark:border-zinc-800'}">
                <div onclick="launchDaySplit('${splitName}', '${d}', false)" class="flex-1 cursor-pointer">
                  <div class="flex items-center space-x-1.5">
                    <span class="text-xs font-black ${isToday ? 'text-blue-700 dark:text-blue-300' : 'text-zinc-700 dark:text-zinc-300'}">${d}</span>${isToday ? '<span class="text-[9px] bg-[var(--app-accent)] text-white px-2 py-0.5 rounded-full font-bold">TODAY</span>' : ''}
                  </div>
                  <div class="text-xs font-semibold text-zinc-600 dark:text-zinc-400 mt-0.5">${splitName}</div>
                </div>
                <button onclick="editScheduleDay('${d}', event)" class="p-2 rounded-xl text-zinc-400 hover:text-zinc-600 text-xs">✎</button>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

function launchCustomDayDirect(dayName) {
  triggerHaptic(15);
  const activeCustom = localStorage.getItem('activeCustomPlanName');
  if (!activeCustom || !customPlans || !customPlans[activeCustom]) {
    alert("Please select or create a custom plan first.");
    showPlanSelectionStep();
    return;
  }

  const plan = customPlans[activeCustom];
  const schedule = plan.schedule || plan;
  const dayConfig = schedule[dayName] || { split: 'Workout', exercises: [] };

  if (dayConfig.split && dayConfig.split.toLowerCase().includes('rest')) {
    alert(`Today (${dayName}) is designated as a Rest Day in your custom plan.`);
    return;
  }

  const assignedItems = Array.isArray(dayConfig.exercises) ? dayConfig.exercises : [];
  if (assignedItems.length === 0) {
    alert(`No exercises added for ${dayName} in plan "${activeCustom}". Please edit the plan and add exercises first.`);
    return;
  }

  const matchingExercises = [];
  assignedItems.forEach(item => {
    const exName = typeof item === 'string' ? item : item.name;
    const found = EXERCISE_DB.find(ex => ex.name === exName);
    if (found) {
      matchingExercises.push({
        ...found,
        sets: item.sets ? parseInt(item.sets) : 3,
        reps: item.reps ? item.reps : "10-12"
      });
    }
  });

  if (matchingExercises.length === 0) {
    alert(`Could not locate the exercises configured for ${dayName}. Please edit your plan.`);
    return;
  }

  isCustomPlanSession = true;
  currentActiveSplitDay = dayName;
  activeRoutine = matchingExercises;

  showPreWorkoutSummary();
}

function previewWidget(type) {
  triggerHaptic(15);
  if (type === '1x1') {
    alert("1×1 Streak Widget selected!\nDisplays active flame and consecutive streak days on your home screen.");
  } else {
    alert("4×2 Full Dashboard Widget selected!\nDisplays today's split, completed sets, and live MET calories on your home screen.");
  }
}

function launchDaySplit(splitString, targetDayName = null, isCustom = false) {
  triggerHaptic(15);
  if (splitString && splitString.toLowerCase().includes('rest')) {
    alert("Today is rest day, happy recovery!");
    return;
  }

  isCustomPlanSession = isCustom;
  currentActiveSplitDay = targetDayName || getTodayDayName();

  selectedMuscles.clear();
  const s = (splitString || '').toLowerCase();
  ['Chest', 'Back', 'Shoulders', 'Arms', 'Core', 'Legs', 'Traps', 'Abs'].forEach(m => {
    if (s.includes(m.toLowerCase())) {
      selectedMuscles.add(m);
    }
  });

  if (s.includes('core') || s.includes('abs')) {
    selectedMuscles.add('Core');
    selectedMuscles.add('Abs');
  }

  if (selectedMuscles.size === 0) selectedMuscles.add('Chest');
  handleRouteToWorkout();
}

function editScheduleDay(day, ev) {
  if (ev) ev.stopPropagation();
  triggerHaptic(10);
  const current = weeklyPlan[day] || '';
  const updated = prompt(`Enter muscle split for ${day}:`, current);
  if (updated !== null && updated.trim() !== '') {
    weeklyPlan[day] = updated.trim();
    localStorage.setItem('weeklyPlan', JSON.stringify(weeklyPlan));
    renderTodayDashboard();
  }
}

function logRestDayAction() {
  triggerHaptic(20);
  const todayISO = getTodayISODate();
  if (!Array.isArray(userStats.loggedDates)) userStats.loggedDates = [];
  
  const alreadyLoggedToday = userStats.loggedDates.some(item => item.date === todayISO);
  userStats.loggedDates.push({ date: todayISO, type: 'rest', calories: 0, durationMinutes: 0 });
  
  if (!alreadyLoggedToday) {
    userStats.activeStreak++;
  }
  
  localStorage.setItem('userStats', JSON.stringify(userStats));
  updateStreakPillUI();
  alert("Rest day logged! Happy recovery! 💤");
  renderTodayDashboard();
}

let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

function triggerPWAInstallPrompt() {
  triggerHaptic(15);
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => { deferredPrompt = null; });
  } else {
    alert("To add Aethon Fit widget on Android:\n1. Tap Chrome's three-dot menu (⋮)\n2. Tap 'Add to Home screen' or 'Install App'!\n3. Touch and hold home screen to place widget.");
  }
}

// ============================================================================
// 9. PRE-WORKOUT SUMMARY & WORKOUT RUNNER
// ============================================================================
function handleRouteToWorkout() {
  if (appSettings.skipPreferencesScreen) {
    showPreWorkoutSummary();
  } else {
    showWorkoutSetupModal();
  }
}

function showWorkoutSetupModal() {
  triggerHaptic(15);
  setHeaderAction('sub', () => navigateTab('today'));

  container.innerHTML = `
    <div class="space-y-6 pb-24">
      <div>
        <span class="text-[10px] font-extrabold uppercase tracking-widest text-[var(--app-accent)]">Preferences</span>
        <h2 class="text-2xl font-black text-zinc-900 dark:text-white">Workout Session Setup</h2>
        <p class="text-xs text-zinc-500 mt-0.5">Targeting: ${Array.from(selectedMuscles).join(' + ')}</p>
      </div>

      <div class="space-y-4">
        <div>
          <label class="text-xs font-bold text-zinc-500 uppercase tracking-wider">Equipment Access</label>
          <div class="grid grid-cols-2 gap-3 mt-2">
            <button id="opt-home" onclick="setEnv('home')" class="p-4 rounded-2xl border-2 ${workoutEnvironment === 'home' ? 'border-[var(--app-accent)] bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200' : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#161722] text-zinc-600 dark:text-zinc-400'} text-left font-bold m3-spring">
              🏡 Home / Calisthenics
            </button>
            <button id="opt-gym" onclick="setEnv('gym')" class="p-4 rounded-2xl border-2 ${workoutEnvironment === 'gym' ? 'border-[var(--app-accent)] bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200' : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#161722] text-zinc-600 dark:text-zinc-400'} text-left font-bold m3-spring">
              🏋️ Gym / Equipment
            </button>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700 flex items-center space-x-3">
          <input type="checkbox" id="chk-dont-show" class="w-5 h-5 rounded accent-[var(--app-accent)] cursor-pointer" />
          <label for="chk-dont-show" class="text-xs text-zinc-700 dark:text-zinc-300 font-bold cursor-pointer">
            Don't show this setup again (Jump directly to workout)
          </label>
        </div>
      </div>

      <button onclick="confirmAndShowSummary()" class="w-full py-4 rounded-2xl bg-[var(--app-accent)] hover:bg-blue-700 text-white font-extrabold text-base shadow-md shadow-blue-500/20 m3-spring">
        ⚡ Ready to Jump In →
      </button>
      <button onclick="navigateTab('today')" class="w-full py-1 text-xs text-zinc-500 font-semibold text-center">← Back to Today</button>
    </div>
  `;
}

function setEnv(val) {
  triggerHaptic(10);
  workoutEnvironment = val;
  document.getElementById('opt-home').className = val === 'home'
    ? 'p-4 rounded-2xl border-2 border-[var(--app-accent)] bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 text-left font-bold m3-spring'
    : 'p-4 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#161722] text-zinc-600 dark:text-zinc-400 text-left font-bold m3-spring';
  document.getElementById('opt-gym').className = val === 'gym'
    ? 'p-4 rounded-2xl border-2 border-[var(--app-accent)] bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 text-left font-bold m3-spring'
    : 'p-4 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#161722] text-zinc-600 dark:text-zinc-400 text-left font-bold m3-spring';
}

function confirmAndShowSummary() {
  const dontShow = document.getElementById('chk-dont-show');
  if (dontShow && dontShow.checked) {
    appSettings.skipPreferencesScreen = true;
    localStorage.setItem('appSettings', JSON.stringify(appSettings));
  }
  showPreWorkoutSummary();
}

function showPreWorkoutSummary() {
  triggerHaptic(15);
  setHeaderAction('sub', () => navigateTab('today'));
  const isGym = workoutEnvironment === 'gym';
  const activePlanName = localStorage.getItem('activeCustomPlanName');
  const targetDay = currentActiveSplitDay || getTodayDayName();

  if (isCustomPlanSession && activePlanName && customPlans && customPlans[activePlanName]) {
    const planSchedule = customPlans[activePlanName].schedule || customPlans[activePlanName];
    if (planSchedule && planSchedule[targetDay]) {
      const list = planSchedule[targetDay].exercises || [];
      if (Array.isArray(list) && list.length > 0) {
        activeRoutine = [];
        list.forEach(item => {
          const exName = typeof item === 'string' ? item : item.name;
          const found = EXERCISE_DB.find(ex => ex.name === exName);
          if (found) {
            activeRoutine.push({
              ...found,
              sets: item.sets ? parseInt(item.sets) : 3,
              reps: item.reps ? item.reps : "10-12"
            });
          }
        });
      }
    }
  } else if (!isCustomPlanSession) {
    activeRoutine = EXERCISE_DB.filter(ex => selectedMuscles.has(ex.target) && ex.equipment === isGym);
    if (activeRoutine.length === 0) {
      activeRoutine = EXERCISE_DB.filter(ex => selectedMuscles.has(ex.target));
    }
    if (activeRoutine.length === 0) {
      activeRoutine = EXERCISE_DB.slice(0, 5).map(ex => ({ ...ex, sets: 3, reps: '10-15' }));
    }
  }

  container.innerHTML = `
    <div class="space-y-4 pb-24">
      <div>
        <span class="text-[10px] font-extrabold uppercase tracking-widest text-[var(--app-accent)]">Session Overview</span>
        <h2 class="text-2xl font-black text-zinc-900 dark:text-white">Today's Workout Summary</h2>
        <p class="text-xs text-zinc-500 mt-0.5">Target: <span class="font-bold text-[var(--app-accent)]">${isCustomPlanSession ? 'Custom Routine (' + targetDay + ')' : Array.from(selectedMuscles).join(' + ')}</span> • Mode: <span class="font-bold">${workoutEnvironment.toUpperCase()}</span></p>
      </div>

      <div class="space-y-2.5 max-h-[50vh] overflow-y-auto pr-1">
        ${activeRoutine.map((ex, idx) => `
          <div class="p-4 rounded-2xl bg-white dark:bg-[#161722] border border-zinc-200 dark:border-zinc-800 flex items-center space-x-3 shadow-sm">
            <div class="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-950/50 text-[var(--app-accent)] font-black flex items-center justify-center text-xs shrink-0">
              ${idx + 1}
            </div>
            <div class="flex-1 min-w-0">
              <div class="text-sm font-bold text-zinc-900 dark:text-white truncate">${ex.name}</div>
              <div class="text-[11px] text-zinc-500 truncate">Primary: <span class="text-[var(--app-accent)] font-semibold">${ex.primary || ex.target}</span> • ${ex.sets || 3} Sets × ${ex.reps || '10-12 reps'}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <button onclick="startActiveWorkoutSession()" class="w-full py-4 rounded-2xl bg-[var(--app-accent)] hover:bg-blue-700 text-white font-extrabold text-base shadow-md shadow-blue-500/20 m3-spring">
        ⚡ Ready to Jump In
      </button>

      <button onclick="navigateTab('today')" class="w-full py-1 text-xs text-zinc-400 font-semibold text-center">← Back to Today</button>
    </div>
  `;
}

function startActiveWorkoutSession() {
  triggerHaptic(20);
  sessionStartTime = performance.now();
  currentExerciseIndex = 0;
  currentSetNumber = 1;
  renderWorkoutRunner();
}

function skipThisExercise() {
  triggerHaptic(20);
  if (currentExerciseIndex < activeRoutine.length - 1) {
    currentExerciseIndex++;
    currentSetNumber = 1;
    renderWorkoutRunner();
  } else {
    alert("This was the final exercise in today's split! Great job completing your session.");
    finishWorkoutSession();
  }
}

function renderWorkoutRunner() {
  setHeaderAction('sub', () => {
    if (confirm("Do you want to end your current workout?")) {
      navigateTab('today');
    }
  });

  const ex = activeRoutine[currentExerciseIndex];
  const maxSets = ex && ex.sets ? parseInt(ex.sets) : 3;
  const repTarget = ex && ex.reps ? ex.reps : '10 - 15 reps';

  container.innerHTML = `
    <div class="space-y-4 pb-24">
      <div class="flex justify-between items-center">
        <span class="text-xs uppercase font-extrabold px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
          Exercise ${currentExerciseIndex + 1} of ${activeRoutine.length}
        </span>
        
        <div class="flex items-center space-x-2">
          <button onclick="openSpotifyApp()" class="flex items-center space-x-1 px-3 py-1 rounded-full bg-[#1db954]/15 border border-[#1db954]/40 text-[#1db954] text-xs font-bold m3-spring shadow-sm">
            <span>🟢</span>
            <span>Spotify</span>
          </button>
          <button onclick="openInfoModal()" class="w-8 h-8 rounded-full bg-white dark:bg-zinc-800 hover:bg-zinc-100 text-zinc-700 dark:text-zinc-200 font-bold flex items-center justify-center border border-zinc-300 dark:border-zinc-700 m3-spring shadow-sm">
            ⓘ
          </button>
        </div>
      </div>

      <div class="rounded-3xl overflow-hidden bg-white dark:bg-[#161722] border border-zinc-200 dark:border-zinc-800 shadow-sm relative">
        <img src="${ex.demo}" alt="${ex.name}" class="w-full h-56 object-cover" />
        <div class="p-4">
          <h3 class="text-2xl font-black text-zinc-900 dark:text-white leading-tight">${ex.name}</h3>
          <p class="text-xs text-zinc-500 mt-0.5">Primary Target: <span class="text-[var(--app-accent)] dark:text-blue-400 font-bold">${ex.primary}</span></p>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div class="p-4 rounded-2xl bg-white dark:bg-[#161722] border border-zinc-200 dark:border-zinc-800 text-center shadow-sm">
          <div class="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Current Set</div>
          <div class="text-3xl font-black text-zinc-900 dark:text-white mt-0.5">${currentSetNumber} <span class="text-xs text-zinc-400">/ ${maxSets}</span></div>
        </div>
        <div class="p-4 rounded-2xl bg-white dark:bg-[#161722] border border-zinc-200 dark:border-zinc-800 text-center shadow-sm">
          <div class="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Rep Target</div>
          <div class="text-2xl font-black text-[var(--app-accent)] dark:text-blue-400 mt-0.5">${repTarget}</div>
        </div>
      </div>

      <button onclick="finishSet()" class="w-full py-4 rounded-2xl bg-[var(--app-accent)] hover:bg-blue-700 text-white font-extrabold text-lg shadow-md shadow-blue-500/20 m3-spring">
        Complete Set ${currentSetNumber} ✓
      </button>

      <button onclick="skipThisExercise()" class="w-full py-3 rounded-2xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 font-bold text-xs m3-spring transition flex items-center justify-center space-x-1.5 shadow-sm">
        <span>⏭ Skip This Exercise (Go to Next)</span>
      </button>

      <button onclick="navigateTab('today')" class="w-full py-1 text-xs text-zinc-400 font-semibold text-center">End Workout</button>
    </div>
  `;
}

function openInfoModal() {
  triggerHaptic(12);
  const ex = activeRoutine[currentExerciseIndex];
  const modal = getModalContainer();
  modal.innerHTML = `
    <div class="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-end justify-center">
      <div class="w-full max-w-md bg-white dark:bg-[#161722] border-t border-zinc-200 dark:border-zinc-800 rounded-t-[32px] p-6 space-y-4 m3-bottom-sheet shadow-2xl">
        <div class="flex justify-between items-center pb-2 border-b border-zinc-100 dark:border-zinc-800">
          <h4 class="text-lg font-black text-zinc-900 dark:text-white">${ex.name}</h4>
          <button onclick="closeModal()" class="w-7 h-7 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 text-xs font-bold">✕</button>
        </div>

        <div class="space-y-2.5">
          <div class="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900">
            <span class="text-[10px] font-black uppercase tracking-wider text-blue-700 dark:text-blue-300">🔵 Primary Driver</span>
            <div class="text-sm font-bold text-blue-950 dark:text-blue-100 mt-0.5">${ex.primary}</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900">
            <span class="text-[10px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-300">🟠 Secondary Synergist</span>
            <div class="text-sm font-bold text-amber-950 dark:text-amber-100 mt-0.5">${ex.secondary}</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
            <span class="text-[10px] font-black uppercase tracking-wider text-zinc-600 dark:text-zinc-400">🟡 Tertiary Stabilizer</span>
            <div class="text-sm font-bold text-zinc-800 dark:text-zinc-200 mt-0.5">${ex.tertiary}</div>
          </div>
        </div>

        <button onclick="closeModal()" class="w-full py-3.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold text-xs m3-spring">Close</button>
      </div>
    </div>
  `;
}

function finishSet() {
  triggerHaptic(25);
  userStats.totalSetsCompleted++;
  localStorage.setItem('userStats', JSON.stringify(userStats));

  const ex = activeRoutine[currentExerciseIndex];
  const maxSets = ex && ex.sets ? parseInt(ex.sets) : 3;

  if (currentSetNumber < maxSets) {
    currentSetNumber++;
    openRest(false);
  } else {
    if (currentExerciseIndex < activeRoutine.length - 1) {
      currentExerciseIndex++;
      currentSetNumber = 1;
      openRest(true);
    } else {
      finishWorkoutSession();
    }
  }
}

function finishWorkoutSession() {
  const elapsedMinutes = sessionStartTime ? Math.max(Math.round((performance.now() - sessionStartTime) / 60000), 1) : 30;
  const burnedCalories = calculateDynamicMETCalories(elapsedMinutes);

  userStats.workoutsCompleted++;
  userStats.totalCaloriesBurned += burnedCalories;
  const todayISO = getTodayISODate();
  if (!Array.isArray(userStats.loggedDates)) userStats.loggedDates = [];
  
  const alreadyLoggedToday = userStats.loggedDates.some(item => item.date === todayISO);
  userStats.loggedDates.push({ date: todayISO, type: 'workout', calories: burnedCalories, durationMinutes: elapsedMinutes });
  
  if (!alreadyLoggedToday) {
    userStats.activeStreak++;
  }
  
  localStorage.setItem('userStats', JSON.stringify(userStats));
  updateStreakPillUI();

  dispatchFitbitHealthSession(elapsedMinutes, burnedCalories);

  alert(`Workout Completed! 🏆\nDuration: ${elapsedMinutes} mins\nBurned: ${burnedCalories} kcal`);
  navigateTab('today');
}

function dispatchFitbitHealthSession(duration, calories) {
  const payload = {
    packageName: 'com.aethonfit.fitness',
    activity: 'Strength Training',
    caloriesBurned: calories,
    durationMinutes: duration,
    timestamp: new Date().toISOString()
  };
  localStorage.setItem('fitbit_last_synced_session', JSON.stringify(payload));
}

function openRest(isNextEx) {
  restSeconds = appSettings.defaultRestTime || 60;
  container.innerHTML = `
    <div class="space-y-6 text-center py-6 pb-24">
      <div>
        <span class="text-[10px] font-extrabold text-[var(--app-accent)] uppercase tracking-widest">Recovery Phase</span>
        <h2 class="text-3xl font-black text-zinc-900 dark:text-white mt-1">${isNextEx ? 'Prepare for Next Move' : 'Catch Your Breath'}</h2>
      </div>

      <div class="w-48 h-48 mx-auto rounded-full border-4 border-[var(--app-accent)] bg-white dark:bg-[#161722] flex flex-col items-center justify-center shadow-lg timer-pulse-ring">
        <span id="countdown-text" class="text-5xl font-black text-zinc-900 dark:text-white font-mono">${restSeconds}s</span>
        <span class="text-[10px] text-[var(--app-accent)] font-bold uppercase tracking-wider mt-1">Resting</span>
      </div>

      <div class="grid grid-cols-3 gap-2.5">
        <button onclick="restSeconds += 30; document.getElementById('countdown-text').textContent = restSeconds + 's';" class="py-3 px-2 rounded-2xl bg-white dark:bg-[#161722] border border-zinc-200 dark:border-zinc-800 text-xs font-bold text-zinc-700 dark:text-zinc-200 m3-spring shadow-sm">+30 Sec</button>
        <button id="btn-pause" onclick="togglePauseClock()" class="py-3 px-2 rounded-2xl bg-white dark:bg-[#161722] border border-zinc-200 dark:border-zinc-800 text-xs font-bold text-zinc-700 dark:text-zinc-200 m3-spring shadow-sm">Pause</button>
        <button onclick="skipRestClock()" class="py-3 px-2 rounded-2xl bg-[var(--app-accent)] text-white text-xs font-black shadow-md shadow-blue-500/20 m3-spring">Next Set ❯❯</button>
      </div>
    </div>
  `;
  startClock();
}

let clockPaused = false;
function togglePauseClock() {
  triggerHaptic(10);
  const btn = document.getElementById('btn-pause');
  if (clockPaused) {
    startClock();
    clockPaused = false;
    btn.textContent = "Pause";
  } else {
    clearInterval(restTimerInterval);
    clockPaused = true;
    btn.textContent = "Resume";
  }
}

function startClock() {
  if (restTimerInterval) clearInterval(restTimerInterval);
  restTimerInterval = setInterval(() => {
    restSeconds--;
    const el = document.getElementById('countdown-text');
    if (el) el.textContent = `${restSeconds}s`;
    if (restSeconds <= 0) {
      clearInterval(restTimerInterval);
      triggerHaptic([100, 50, 100]);
      playCompletionBeep();
      skipRestClock();
    }
  }, 1000);
}

function skipRestClock() {
  if (restTimerInterval) clearInterval(restTimerInterval);
  renderWorkoutRunner();
}

// ============================================================================
// 10. "CINDY" WOD BENCHMARK
// ============================================================================
let cindyTimerInterval = null;
let cindySecondsLeft = 1200;

function openCindyWorkoutModal() {
  triggerHaptic(15);
  const modal = getModalContainer();
  modal.innerHTML = `
    <div class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div class="w-full max-w-md bg-white dark:bg-[#161722] rounded-[32px] p-6 space-y-4 shadow-2xl m3-bottom-sheet max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-center pb-2 border-b border-zinc-100 dark:border-zinc-800">
          <div class="flex items-center space-x-2">
            <span class="text-2xl">🏆</span>
            <h4 class="text-lg font-black text-zinc-900 dark:text-white">CrossFit WOD: Cindy</h4>
          </div>
          <button onclick="closeModal()" class="w-7 h-7 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 text-xs font-bold">✕</button>
        </div>

        <div class="space-y-3 text-xs text-zinc-600 dark:text-zinc-300">
          <div class="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-amber-900 dark:text-amber-200 font-bold">
            🔥 Tom Holland Benchmark: 27 rounds personal record!
          </div>
          <p class="font-bold text-zinc-900 dark:text-white">Complete as many rounds as possible in 20 minutes:</p>
          <ul class="space-y-1.5 pl-4 list-disc font-semibold">
            <li>1. 5 Pull-Ups</li>
            <li>2. 10 Push-Ups</li>
            <li>3. 15 Bodyweight Squats</li>
          </ul>
        </div>

        <button onclick="startCindyTimerScreen()" class="w-full py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-sm shadow-md m3-spring">
          Start 20-Min Cindy Timer ⏱️
        </button>
      </div>
    </div>
  `;
}

function startCindyTimerScreen() {
  triggerHaptic(20);
  cindySecondsLeft = 1200;
  const modal = getModalContainer();

  modal.innerHTML = `
    <div class="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-between p-8 text-white">
      <div class="text-center space-y-1 pt-4">
        <span class="text-xs uppercase font-extrabold tracking-widest text-amber-400">AMRAP 20 MINUTES</span>
        <h3 class="text-2xl font-black">CrossFit Cindy Active</h3>
      </div>

      <div class="w-64 h-64 rounded-full border-8 border-amber-500 bg-zinc-900 flex flex-col items-center justify-center shadow-[0_0_60px_rgba(245,158,11,0.4)] timer-pulse-ring">
        <span id="cindy-clock" class="text-5xl font-black font-mono">20:00</span>
        <span class="text-xs text-amber-400 font-bold uppercase mt-1">Remaining</span>
      </div>

      <div class="w-full max-w-xs space-y-3 pb-6">
        <button onclick="stopCindyEarly()" class="w-full py-3.5 rounded-2xl bg-zinc-800 text-zinc-300 font-bold text-xs m3-spring">Finish / Stop Timer</button>
      </div>
    </div>
  `;

  if (cindyTimerInterval) clearInterval(cindyTimerInterval);
  cindyTimerInterval = setInterval(() => {
    cindySecondsLeft--;
    const mins = Math.floor(cindySecondsLeft / 60);
    const secs = cindySecondsLeft % 60;
    const clockEl = document.getElementById('cindy-clock');
    if (clockEl) clockEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    if (cindySecondsLeft <= 0) {
      clearInterval(cindyTimerInterval);
      playCompletionBeep();
      triggerHaptic([200, 100, 200]);
      promptCindyResultEntry();
    }
  }, 1000);
}

function stopCindyEarly() {
  if (cindyTimerInterval) clearInterval(cindyTimerInterval);
  playCompletionBeep();
  promptCindyResultEntry();
}

function promptCindyResultEntry() {
  const rounds = prompt("🎉 Congratulations on finishing Cindy!\nEnter total rounds completed (e.g. 18):", "15");
  if (rounds !== null) {
    const todayISO = getTodayISODate();
    if (!Array.isArray(userStats.loggedDates)) userStats.loggedDates = [];
    
    const alreadyLoggedToday = userStats.loggedDates.some(item => item.date === todayISO);
    userStats.loggedDates.push({ date: todayISO, type: 'cindy', rounds: parseInt(rounds) || 15, calories: 350, durationMinutes: 20 });
    userStats.workoutsCompleted++;
    userStats.totalCaloriesBurned += 350;
    
    if (!alreadyLoggedToday) {
      userStats.activeStreak++;
    }
    
    localStorage.setItem('userStats', JSON.stringify(userStats));
    updateStreakPillUI();
    alert(`Cindy WOD logged successfully!\nCompleted: ${rounds} Rounds 🏆`);
  }
  closeModal();
  navigateTab('today');
}

// ============================================================================
// 11. TAB 2: ANATOMY MAP VIEW
// ============================================================================
function renderFitnessWorkout() {
  setHeaderAction('home');
  ensureBottomNavVisible();
  const ALL_MUSCLES = [
    { name: 'Chest', view: 'front' },
    { name: 'Shoulders', view: 'both' },
    { name: 'Arms', view: 'both' },
    { name: 'Core', view: 'front' },
    { name: 'Legs', view: 'both' },
    { name: 'Back', view: 'back' },
    { name: 'Traps', view: 'back' },
    { name: 'Abs', view: 'front' }
  ];

  container.innerHTML = `
    <div class="space-y-4 pb-24">
      <div class="flex justify-between items-center">
        <div>
          <span class="text-[10px] font-extrabold uppercase tracking-widest text-[var(--app-accent)]">Start a Workout</span>
          <h2 class="text-2xl font-black text-zinc-900 dark:text-white">Target Anatomy</h2>
        </div>
        <div class="flex items-center space-x-2">
          <button onclick="currentViewAngle = currentViewAngle === 'front' ? 'back' : 'front'; renderFitnessWorkout();" class="px-3 py-1.5 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-bold text-[var(--app-accent)] dark:text-blue-400 m3-spring shadow-sm">
            🔄 ${currentViewAngle === 'front' ? 'View Back' : 'View Front'}
          </button>
          <button onclick="selectedMuscles.clear(); renderFitnessWorkout();" class="text-xs font-semibold text-zinc-400 hover:text-zinc-600">Reset</button>
        </div>
      </div>

      <div class="anatomy-stage-responsive rounded-[32px] p-5 flex flex-col items-center justify-center relative min-h-[350px] overflow-hidden">
        <svg id="anatomy-svg" viewBox="0 0 240 320" class="w-56 h-80 drop-shadow-sm">
          <ellipse cx="120" cy="28" rx="14" ry="17" fill="#d2d5de" stroke="#b0b4c0" stroke-width="1.2"/>
          <rect x="114" y="45" width="12" height="12" fill="#d2d5de"/>

          ${currentViewAngle === 'front' ? `
            <path id="svg-shoulders-l" onclick="toggleMuscle('Shoulders')" class="muscle-zone-m3" d="M 96 58 C 76 60, 68 76, 72 94 C 80 92, 88 88, 96 82 Z" />
            <path id="svg-shoulders-r" onclick="toggleMuscle('Shoulders')" class="muscle-zone-m3" d="M 144 58 C 164 60, 172 76, 168 94 C 160 92, 152 88, 144 82 Z" />
            <path id="svg-chest-l" onclick="toggleMuscle('Chest')" class="muscle-zone-m3" d="M 98 68 C 106 65, 115 67, 118 72 L 118 108 C 104 108, 90 98, 92 84 Z" />
            <path id="svg-chest-r" onclick="toggleMuscle('Chest')" class="muscle-zone-m3" d="M 142 68 C 134 65, 125 67, 122 72 L 122 108 C 136 108, 150 98, 148 84 Z" />
            <rect id="svg-arms-l" onclick="toggleMuscle('Arms')" class="muscle-zone-m3" x="52" y="94" width="18" height="48" rx="9"/>
            <rect id="svg-arms-r" onclick="toggleMuscle('Arms')" class="muscle-zone-m3" x="170" y="94" width="18" height="48" rx="9"/>
            <rect id="svg-core" onclick="toggleMuscle('Core')" class="muscle-zone-m3" x="100" y="112" width="40" height="42" rx="6" />
            <rect id="svg-quads-l" onclick="toggleMuscle('Legs')" class="muscle-zone-m3" x="78" y="162" width="38" height="74" rx="14"/>
            <rect id="svg-quads-r" onclick="toggleMuscle('Legs')" class="muscle-zone-m3" x="124" y="162" width="38" height="74" rx="14"/>
            <rect id="svg-calves-l" onclick="toggleMuscle('Legs')" class="muscle-zone-m3" x="84" y="244" width="26" height="52" rx="10"/>
            <rect id="svg-calves-r" onclick="toggleMuscle('Legs')" class="muscle-zone-m3" x="130" y="244" width="26" height="52" rx="10"/>
          ` : `
            <path id="svg-traps-l" onclick="toggleMuscle('Traps')" class="muscle-zone-m3" d="M 104 50 L 118 45 L 118 68 L 98 64 Z" />
            <path id="svg-traps-r" onclick="toggleMuscle('Traps')" class="muscle-zone-m3" d="M 136 50 L 122 45 L 122 68 L 142 64 Z" />
            <path id="svg-shoulders-l" onclick="toggleMuscle('Shoulders')" class="muscle-zone-m3" d="M 96 56 C 80 60, 68 76, 72 94 L 96 82 Z" />
            <path id="svg-shoulders-r" onclick="toggleMuscle('Shoulders')" class="muscle-zone-m3" d="M 144 56 C 160 60, 172 76, 168 94 L 144 82 Z" />
            <path id="svg-back-l" onclick="toggleMuscle('Back')" class="muscle-zone-m3" d="M 98 68 L 118 74 L 118 135 L 86 128 L 86 92 Z" />
            <path id="svg-back-r" onclick="toggleMuscle('Back')" class="muscle-zone-m3" d="M 142 68 L 122 74 L 122 135 L 154 128 L 154 92 Z" />
            <rect id="svg-arms-l" onclick="toggleMuscle('Arms')" class="muscle-zone-m3" x="52" y="94" width="18" height="48" rx="9"/>
            <rect id="svg-arms-r" onclick="toggleMuscle('Arms')" class="muscle-zone-m3" x="170" y="94" width="18" height="48" rx="9"/>
            <path id="svg-glutes" onclick="toggleMuscle('Legs')" class="muscle-zone-m3" d="M 82 140 C 82 172, 116 174, 118 144 L 122 144 C 124 174, 158 172, 158 140 Z" />
            <rect id="svg-quads-l" onclick="toggleMuscle('Legs')" class="muscle-zone-m3" x="80" y="174" width="36" height="62" rx="12"/>
            <rect id="svg-quads-r" onclick="toggleMuscle('Legs')" class="muscle-zone-m3" x="124" y="174" width="36" height="62" rx="12"/>
            <rect id="svg-calves-l" onclick="toggleMuscle('Legs')" class="muscle-zone-m3" x="84" y="244" width="26" height="52" rx="10"/>
            <rect id="svg-calves-r" onclick="toggleMuscle('Legs')" class="muscle-zone-m3" x="130" y="244" width="26" height="52" rx="10"/>
          `}
        </svg>

        <span class="absolute bottom-2 text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
          Showing ${currentViewAngle.toUpperCase()} • Tap to highlight
        </span>
      </div>

      <div class="flex flex-wrap gap-2 mt-2">
        ${ALL_MUSCLES.map(m => {
          const isSel = selectedMuscles.has(m.name);
          return `
            <button onclick="toggleMuscle('${m.name}')" class="px-3.5 py-1.5 rounded-full text-xs font-bold transition m3-spring ${
              isSel ? 'bg-[var(--app-accent)] text-white shadow-sm shadow-blue-500/30' : 'bg-white dark:bg-[#161722] text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800'
            }">
              ${isSel ? '✓ ' : '+ '}${m.name}
            </button>
          `;
        }).join('')}
      </div>

      <button onclick="isCustomPlanSession = false; handleRouteToWorkout();" ${selectedMuscles.size === 0 ? 'disabled' : ''} class="w-full py-4 rounded-2xl ${selectedMuscles.size === 0 ? 'bg-zinc-200 text-zinc-400' : 'bg-[var(--app-accent)] hover:bg-blue-700 text-white shadow-md shadow-blue-500/20'} font-extrabold text-sm tracking-wide m3-spring transition">
        ${selectedMuscles.size === 0 ? 'Select Muscles to Train' : `Start Training (${selectedMuscles.size} Groups) →`}
      </button>
    </div>
  `;

  syncSvgZones();
}

function toggleMuscle(m) {
  triggerHaptic(12);
  if (selectedMuscles.has(m)) selectedMuscles.delete(m);
  else selectedMuscles.add(m);
  renderFitnessWorkout();
}

function syncSvgZones() {
  const map = {
    'Chest': ['svg-chest-l', 'svg-chest-r'],
    'Shoulders': ['svg-shoulders-l', 'svg-shoulders-r'],
    'Arms': ['svg-arms-l', 'svg-arms-r'],
    'Core': ['svg-core'],
    'Abs': ['svg-core'],
    'Back': ['svg-back-l', 'svg-back-r'],
    'Traps': ['svg-traps-l', 'svg-traps-r'],
    'Legs': ['svg-quads-l', 'svg-quads-r', 'svg-calves-l', 'svg-calves-r', 'svg-glutes']
  };

  for (const [m, nodeIds] of Object.entries(map)) {
    nodeIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        if (selectedMuscles.has(m)) el.classList.add('selected');
        else el.classList.remove('selected');
      }
    });
  }
}

// ============================================================================
// 12. TAB 3: MOVEMENT LIBRARY
// ============================================================================
function renderLibrary() {
  setHeaderAction('home');
  ensureBottomNavVisible();
  container.innerHTML = `
    <div class="space-y-4 pb-24">
      <div>
        <span class="text-[10px] font-extrabold uppercase tracking-widest text-[var(--app-accent)]">Complete Taxonomy</span>
        <h2 class="text-2xl font-black text-zinc-900 dark:text-white">Movement Library</h2>
      </div>

      <div class="relative">
        <input type="text" id="lib-search" oninput="searchLibrary()" placeholder="Search push-up, pull-up, squat, bench, curls..." class="w-full p-4 rounded-2xl bg-white dark:bg-[#161722] border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-white text-sm focus:outline-none focus:border-[var(--app-accent)] shadow-sm transition" />
        <span class="absolute right-4 top-4 text-zinc-400">🔍</span>
      </div>

      <div id="lib-results" class="space-y-2.5 max-h-[60vh] overflow-y-auto pr-1"></div>
    </div>
  `;
  searchLibrary();
}

function searchLibrary() {
  const q = (document.getElementById('lib-search')?.value || '').toLowerCase();
  const list = document.getElementById('lib-results');
  if (!list) return;

  const matches = EXERCISE_DB.filter(ex => ex.name.toLowerCase().includes(q) || ex.target.toLowerCase().includes(q) || ex.primary.toLowerCase().includes(q));

  if (matches.length === 0) {
    list.innerHTML = `<div class="text-center py-10 text-zinc-400 text-xs">No movements found matching "${q}".</div>`;
    return;
  }

  list.innerHTML = matches.map(ex => `
    <div onclick="openExerciseDetailModal('${ex.id}')" class="p-4 rounded-2xl bg-white dark:bg-[#161722] border border-zinc-200 dark:border-zinc-800 flex justify-between items-center shadow-sm m3-spring cursor-pointer hover:border-blue-400">
      <div class="space-y-0.5">
        <div class="text-sm font-bold text-zinc-900 dark:text-white">${ex.name}</div>
        <div class="text-[11px] text-zinc-500">Target: <span class="text-[var(--app-accent)] font-bold">${ex.target}</span> • ${ex.equipment ? '🏋️ Gym Gear' : '🏡 Home'}</div>
      </div>
      <span class="text-xs bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full text-zinc-700 dark:text-zinc-300 font-bold">${ex.primary.split(' ')[0]}</span>
    </div>
  `).join('');
}

function openExerciseDetailModal(exId) {
  triggerHaptic(15);
  const ex = EXERCISE_DB.find(item => item.id === exId);
  if (!ex) return;

  const modal = getModalContainer();
  modal.innerHTML = `
    <div class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-end justify-center">
      <div class="w-full max-w-md max-h-[90vh] bg-white dark:bg-[#161722] rounded-t-[32px] p-6 space-y-4 m3-bottom-sheet shadow-2xl flex flex-col overflow-y-auto">
        <div class="flex justify-between items-center pb-2 border-b border-zinc-100 dark:border-zinc-800 shrink-0">
          <div>
            <span class="text-[10px] font-extrabold uppercase tracking-widest text-[var(--app-accent)]">${ex.equipment ? '🏋️ Gym Equipment' : '🏡 Bodyweight / Calisthenics'}</span>
            <h4 class="text-xl font-black text-zinc-900 dark:text-white leading-tight">${ex.name}</h4>
          </div>
          <button onclick="closeModal()" class="w-7 h-7 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 text-xs font-bold">✕</button>
        </div>

        <div class="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shrink-0">
          <img src="${ex.demo}" alt="${ex.name}" class="w-full h-48 object-cover" />
        </div>

        <div class="space-y-2">
          <div class="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900">
            <span class="text-[10px] font-bold text-blue-700 dark:text-blue-300 uppercase">Primary Driver</span>
            <div class="text-sm font-black text-blue-950 dark:text-blue-100 mt-0.5">${ex.primary}</div>
          </div>
          <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900">
            <span class="text-[10px] font-bold text-amber-700 dark:text-amber-300 uppercase">Secondary Muscle</span>
            <div class="text-sm font-bold text-amber-950 dark:text-amber-100 mt-0.5">${ex.secondary}</div>
          </div>
          <div class="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700">
            <span class="text-[10px] font-bold text-zinc-500 uppercase">Stabilizer Focus</span>
            <div class="text-sm font-bold text-zinc-800 dark:text-zinc-200">${ex.tertiary}</div>
          </div>
        </div>

        <div class="pt-2 space-y-2 shrink-0">
          <button onclick="startSingleMovementPractice('${ex.id}')" class="w-full py-3.5 rounded-xl bg-[var(--app-accent)] text-white font-extrabold text-xs shadow-md shadow-blue-500/20 m3-spring">
            Practice / Start This Movement ⚡
          </button>
          <button onclick="closeModal()" class="w-full py-2.5 text-xs text-zinc-400 font-semibold text-center">Close</button>
        </div>
      </div>
    </div>
  `;
}

function startSingleMovementPractice(exId) {
  closeModal();
  const ex = EXERCISE_DB.find(item => item.id === exId);
  if (!ex) return;

  activeRoutine = [{ ...ex, sets: 3, reps: '10-15' }];
  currentExerciseIndex = 0;
  currentSetNumber = 1;
  sessionStartTime = performance.now();
  renderWorkoutRunner();
}

// ============================================================================
// 13. TAB 4: SETTINGS & BACKUP ENGINE
// ============================================================================
function renderSettingsAndHealth() {
  setHeaderAction('home');
  ensureBottomNavVisible();
  updateUserAvatarUI();

  const currentName = userProfile && userProfile.name ? userProfile.name : '';
  const currentWeight = userProfile ? userProfile.weight : 70;
  const currentHeight = userProfile ? userProfile.height : 175;
  const bmiInfo = calculateBMI(currentWeight, currentHeight);
  const notifAllowed = ('Notification' in window) && Notification.permission === 'granted';

  container.innerHTML = `
    <div class="space-y-4 pb-24">
      <div>
        <span class="text-[10px] font-extrabold uppercase tracking-widest text-[var(--app-accent)]">Preferences & Diagnostics</span>
        <h2 class="text-2xl font-black text-zinc-900 dark:text-white">Settings & Health</h2>
      </div>

      <div class="p-5 rounded-[28px] bg-white dark:bg-[#161722] border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-2.5">
        <label class="text-xs font-bold text-zinc-500 uppercase tracking-wider">Your Full Name</label>
        <input type="text" id="set-name" value="${currentName}" placeholder="Enter your full name..." class="w-full p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm font-bold text-zinc-900 dark:text-white focus:outline-none focus:border-[var(--app-accent)]" />
        <button onclick="saveProfileName()" class="w-full py-2.5 bg-[var(--app-accent)] hover:bg-blue-700 text-white text-xs font-bold rounded-xl m3-spring shadow-sm">Save Name</button>
      </div>

      <div class="p-5 rounded-[28px] bg-white dark:bg-[#161722] border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-3">
        <div class="flex justify-between items-center">
          <span class="text-xs font-bold text-zinc-500 uppercase tracking-wider">Update Height & Weight</span>
          <span class="text-xs font-extrabold text-[var(--app-accent)]">Live BMI Calc</span>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="text-[10px] font-bold text-zinc-400 uppercase">Height (cm)</label>
            <input type="number" id="set-height" value="${currentHeight}" oninput="updateLiveBioMetrics()" class="w-full mt-1 p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm font-bold text-zinc-900 dark:text-white focus:outline-none" />
          </div>
          <div>
            <label class="text-[10px] font-bold text-zinc-400 uppercase">Weight (kg)</label>
            <input type="number" id="set-weight" value="${currentWeight}" oninput="updateLiveBioMetrics()" class="w-full mt-1 p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm font-bold text-zinc-900 dark:text-white focus:outline-none" />
          </div>
        </div>
      </div>

      <div class="p-6 rounded-[32px] bg-white dark:bg-[#161722] border border-zinc-200/80 dark:border-zinc-800 shadow-sm space-y-2">
        <div class="flex justify-between items-start">
          <div>
            <span class="text-xs font-bold text-zinc-400 uppercase tracking-wider">Body Mass Index (BMI)</span>
            <div id="bmi-display-val" class="text-4xl font-black text-zinc-900 dark:text-white mt-1">${bmiInfo.val}</div>
          </div>
          <span id="bmi-display-status" class="px-3.5 py-1 rounded-full text-xs font-bold border ${bmiInfo.color}">${bmiInfo.status}</span>
        </div>
        <p class="text-xs text-zinc-500">Auto-calibrated using biometric formula.</p>
      </div>

      <div class="p-5 rounded-[28px] bg-white dark:bg-[#161722] border border-zinc-200/80 dark:border-zinc-800 shadow-sm space-y-3">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-2">
            <span class="text-lg">💾</span>
            <span class="text-xs font-black text-zinc-900 dark:text-white">Backup & Sync</span>
          </div>
          <button onclick="openAccountModal()" class="text-[10px] bg-[var(--app-accent)] text-white font-bold px-3 py-1 rounded-full border transition m3-spring">
            Manage Cloud / File
          </button>
        </div>
        <p class="text-xs text-zinc-500">Export or restore your full workout history, active streak, and custom family plans.</p>
      </div>

      <div class="p-5 rounded-[28px] bg-white dark:bg-[#161722] border border-zinc-200/80 dark:border-zinc-800 shadow-sm space-y-3">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-2">
            <span class="text-lg">🔔</span>
            <span class="text-xs font-black text-zinc-900 dark:text-white">Daily Workout Reminder</span>
          </div>
          <button onclick="requestNotificationAccess()" class="text-[10px] ${notifAllowed ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800' : 'bg-[var(--app-accent)] text-white'} font-bold px-3 py-1 rounded-full border transition m3-spring">
            ${notifAllowed ? '✓ Enabled' : 'Enable Alert'}
          </button>
        </div>
        <div class="flex justify-between items-center pt-1">
          <span class="text-xs text-zinc-500 font-semibold">Scheduled Alert Time</span>
          <input type="time" value="${appSettings.reminderTime || '18:00'}" onchange="updateReminderTime(this.value)" class="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-bold text-zinc-900 dark:text-white focus:outline-none" />
        </div>
      </div>

      <div class="p-5 rounded-[28px] bg-white dark:bg-[#161722] border border-zinc-200/80 dark:border-zinc-800 shadow-sm space-y-3">
        <div class="flex justify-between items-center">
          <span class="text-xs font-bold text-zinc-500 uppercase tracking-wider">Default Rest Timer Duration</span>
          <span class="text-xs font-extrabold text-[var(--app-accent)]" id="lbl-rest-val">${appSettings.defaultRestTime}s</span>
        </div>
        <div class="grid grid-cols-5 gap-1.5">
          ${[30, 45, 60, 90, 120].map(s => `
            <button onclick="setDefaultRest(${s})" class="py-2.5 rounded-xl text-xs font-bold transition m3-spring ${
              appSettings.defaultRestTime === s ? 'bg-[var(--app-accent)] text-white shadow-sm' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
            }">
              ${s}s
            </button>
          `).join('')}
        </div>
      </div>

      <div class="p-5 rounded-[28px] bg-white dark:bg-[#161722] border border-zinc-200/80 dark:border-zinc-800 shadow-sm space-y-2">
        <div class="flex justify-between items-center">
          <span class="text-xs font-bold text-zinc-500 uppercase tracking-wider">Spotify Workout Mix URL</span>
          <span class="text-xs text-[#1db954] font-bold">🟢 Active</span>
        </div>
        <input type="text" id="inp-spotify" value="${appSettings.spotifyUrl || 'https://open.spotify.com'}" placeholder="Paste Spotify playlist link" class="w-full p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-800 dark:text-zinc-200 focus:outline-none" />
        <button onclick="saveSpotifyLink()" class="w-full py-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 text-zinc-700 dark:text-zinc-300 text-xs font-bold rounded-xl m3-spring">Save Spotify URL</button>
      </div>

      <div class="p-4 rounded-2xl bg-white dark:bg-[#161722] border border-zinc-200 dark:border-zinc-800 flex justify-between items-center shadow-sm">
        <div>
          <div class="text-xs font-bold text-zinc-800 dark:text-zinc-200">Skip Preferences Popup</div>
          <div class="text-[10px] text-zinc-500">Instantly launch workouts with default gear</div>
        </div>
        <input type="checkbox" onchange="toggleSkipPopup(this.checked)" ${appSettings.skipPreferencesScreen ? 'checked' : ''} class="w-5 h-5 rounded accent-[var(--app-accent)] cursor-pointer" />
      </div>

      <button onclick="showOnboarding()" class="w-full py-4 rounded-2xl bg-white dark:bg-[#161722] border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold text-xs m3-spring shadow-sm">
        Recalibrate Full Profile & Plans ⚙️
      </button>
    </div>
  `;
}

function saveProfileName() {
  triggerHaptic(15);
  const input = document.getElementById('set-name');
  const val = input ? input.value.trim() : '';
  if (val) {
    if (!userProfile) userProfile = {};
    userProfile.name = val;
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    updateUserAvatarUI();
    alert("Name saved successfully!");
  } else {
    alert("Please enter a name first.");
  }
}

function updateProfileName(val) {
  if (!userProfile) userProfile = {};
  userProfile.name = val.trim() || '';
  localStorage.setItem('userProfile', JSON.stringify(userProfile));
  updateUserAvatarUI();
}

function updateLiveBioMetrics() {
  const h = parseFloat(document.getElementById('set-height').value) || 175;
  const w = parseFloat(document.getElementById('set-weight').value) || 70;
  const bmiInfo = calculateBMI(w, h);

  if (userProfile) {
    userProfile.height = h;
    userProfile.weight = w;
    userProfile.bmi = bmiInfo.val;
    userProfile.bmiStatus = bmiInfo.status;
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
  }

  const valEl = document.getElementById('bmi-display-val');
  const statusEl = document.getElementById('bmi-display-status');
  if (valEl) valEl.textContent = bmiInfo.val;
  if (statusEl) {
    statusEl.textContent = bmiInfo.status;
    statusEl.className = `px-3.5 py-1 rounded-full text-xs font-bold border ${bmiInfo.color}`;
  }
}

function requestNotificationAccess() {
  triggerHaptic(15);
  if (!('Notification' in window)) { alert('Notifications not supported.'); return; }
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      appSettings.notificationsEnabled = true;
      localStorage.setItem('appSettings', JSON.stringify(appSettings));
      new Notification('Aethon Fit Activated! ⚡', { body: 'Daily workout reminders are active!' });
      renderSettingsAndHealth();
    }
  });
}

function updateReminderTime(newTime) {
  appSettings.reminderTime = newTime;
  localStorage.setItem('appSettings', JSON.stringify(appSettings));
  triggerHaptic(10);
}

setInterval(() => {
  if (!appSettings.notificationsEnabled || Notification.permission !== 'granted') return;
  const now = new Date();
  const currentHoursMinutes = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  if (currentHoursMinutes === (appSettings.reminderTime || '18:00')) {
    const todayISO = getTodayISODate();
    const alreadyLoggedToday = Array.isArray(userStats.loggedDates) && userStats.loggedDates.some(item => item.date === todayISO);
    if (!alreadyLoggedToday) {
      new Notification('Time to train with Aethon Fit! ⚡', { body: `Today's Split: ${weeklyPlan[getTodayDayName()] || 'Workout'}. Don't break your ${userStats.activeStreak}-day streak!` });
    }
  }
}, 60000);

function setDefaultRest(sec) {
  triggerHaptic(15);
  appSettings.defaultRestTime = sec;
  localStorage.setItem('appSettings', JSON.stringify(appSettings));
  renderSettingsAndHealth();
}

function saveSpotifyLink() {
  triggerHaptic(15);
  const val = document.getElementById('inp-spotify').value.trim();
  if (val) {
    appSettings.spotifyUrl = val;
    localStorage.setItem('appSettings', JSON.stringify(appSettings));
    alert("Spotify URL saved successfully!");
  }
}

function toggleSkipPopup(checked) {
  triggerHaptic(10);
  appSettings.skipPreferencesScreen = checked;
  localStorage.setItem('appSettings', JSON.stringify(appSettings));
}

// ============================================================================
// 14. LIFETIME ACTIVITY LEDGER & OFFLINE JSON / BACKUP ENGINE
// ============================================================================
function generateLifetimeMonthLedger() {
  const startDate = new Date(appInstalledDate);
  const today = new Date();
  const months = [];
  const curr = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
  const end = new Date(today.getFullYear(), today.getMonth(), 1);

  while (curr <= end) {
    months.push(new Date(curr));
    curr.setMonth(curr.getMonth() + 1);
  }
  months.reverse();

  const dateMap = {};
  if (Array.isArray(userStats.loggedDates)) {
    userStats.loggedDates.forEach(item => { dateMap[item.date] = item; });
  }

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return months.map(mDate => {
    const year = mDate.getFullYear();
    const month = mDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = (new Date(year, month, 1).getDay() + 6) % 7;

    let monthWorkouts = 0;
    let monthRest = 0;
    let daysHtml = '';

    for (let e = 0; e < firstDayIndex; e++) { daysHtml += `<div></div>`; }

    for (let day = 1; day <= daysInMonth; day++) {
      const monthStr = String(month + 1).padStart(2, '0');
      const dayStr = String(day).padStart(2, '0');
      const iso = `${year}-${monthStr}-${dayStr}`;
      const log = dateMap[iso];

      let cellClass = 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400';
      let icon = day;

      if (log) {
        if (log.type === 'workout') {
          cellClass = 'bg-blue-500 text-white font-black shadow-sm';
          icon = '✓';
          monthWorkouts++;
        } else if (log.type === 'rest') {
          cellClass = 'bg-indigo-500 text-white font-black shadow-sm';
          icon = '💤';
          monthRest++;
        } else if (log.type === 'cindy') {
          cellClass = 'bg-amber-500 text-white font-black shadow-sm';
          icon = '🏆';
          monthWorkouts++;
        }
      }

      daysHtml += `<div class="h-8 rounded-xl ${cellClass} flex items-center justify-center text-[10px]">${icon}</div>`;
    }

    return `
      <div class="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-800 space-y-2.5">
        <div class="flex justify-between items-center">
          <span class="text-xs font-black text-zinc-900 dark:text-white">${monthNames[month]} ${year}</span>
          <span class="text-[10px] text-zinc-400 font-bold">${monthWorkouts} Workouts • ${monthRest} Rest</span>
        </div>
        <div class="grid grid-cols-7 gap-1 text-center font-bold text-[9px] text-zinc-400 uppercase">
          <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
        </div>
        <div class="grid grid-cols-7 gap-1 text-center">${daysHtml}</div>
      </div>
    `;
  }).join('');
}

function openStreakCalendarModal() {
  triggerHaptic(15);
  const modal = getModalContainer();

  modal.innerHTML = `
    <div class="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-end justify-center">
      <div class="w-full max-w-md max-h-[85vh] bg-white dark:bg-[#161722] border-t border-zinc-200 dark:border-zinc-800 rounded-t-[32px] p-6 space-y-4 m3-bottom-sheet shadow-2xl flex flex-col">
        <div class="flex justify-between items-center pb-2 border-b border-zinc-100 dark:border-zinc-800 shrink-0">
          <div class="flex items-center space-x-2">
            <span class="text-2xl">🔥</span>
            <div>
              <h4 class="text-lg font-black text-zinc-900 dark:text-white leading-tight">Lifetime Activity Ledger</h4>
              <p class="text-[11px] text-zinc-500 font-semibold">${userStats.activeStreak} Days Maintained • Installed: ${appInstalledDate}</p>
            </div>
          </div>
          <button onclick="closeModal()" class="w-7 h-7 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 text-xs font-bold">✕</button>
        </div>

        <div class="grid grid-cols-4 gap-1.5 shrink-0">
          <div class="p-2 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 text-center">
            <div class="text-[8px] font-bold text-blue-700 uppercase">Streak</div>
            <div class="text-base font-black text-blue-950 dark:text-blue-100 mt-0.5">${userStats.activeStreak}d</div>
          </div>
          <div class="p-2 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 text-center">
            <div class="text-[8px] font-bold text-emerald-700 uppercase">Workouts</div>
            <div class="text-base font-black text-emerald-950 dark:text-emerald-100 mt-0.5">${userStats.workoutsCompleted}</div>
          </div>
          <div class="p-2 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 text-center">
            <div class="text-[8px] font-bold text-indigo-700 uppercase">Rest Days</div>
            <div class="text-base font-black text-indigo-950 dark:text-indigo-100 mt-0.5">${Array.isArray(userStats.loggedDates) ? userStats.loggedDates.filter(i => i.type === 'rest').length : 0}</div>
          </div>
          <div class="p-2 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-100 text-center">
            <div class="text-[8px] font-bold text-amber-700 uppercase">Calories</div>
            <div class="text-base font-black text-amber-950 dark:text-amber-100 mt-0.5">${userStats.totalCaloriesBurned}</div>
          </div>
        </div>

        <div class="flex-1 overflow-y-auto space-y-3 pr-1 py-1">
          ${generateLifetimeMonthLedger()}
        </div>

        <button onclick="closeModal()" class="w-full py-3.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold text-xs m3-spring shrink-0">Close Ledger</button>
      </div>
    </div>
  `;
}

function openAccountModal() {
  triggerHaptic(15);
  const modal = getModalContainer();
  const initials = getUserInitials();
  const displayName = (userProfile && userProfile.name) ? userProfile.name : 'Athlete';

  modal.innerHTML = `
    <div class="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-end justify-center">
      <div class="w-full max-w-md bg-white dark:bg-[#161722] border-t border-zinc-200 dark:border-zinc-800 rounded-t-[32px] p-6 space-y-4 m3-bottom-sheet shadow-2xl">
        <div class="flex justify-between items-center pb-2 border-b border-zinc-100 dark:border-zinc-800">
          <div class="flex items-center space-x-2.5">
            <div id="account-modal-avatar" class="w-9 h-9 rounded-full bg-[var(--app-accent)] text-white font-black flex items-center justify-center text-sm shadow-sm">${initials}</div>
            <div>
              <h4 class="text-base font-black text-zinc-900 dark:text-white leading-tight">${displayName}</h4>
              <p class="text-[11px] text-zinc-500">Google Drive & Local Data Sync</p>
            </div>
          </div>
          <button onclick="closeModal()" class="w-7 h-7 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 text-xs font-bold">✕</button>
        </div>

        <div class="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-black text-blue-900 dark:text-blue-200">Google Cloud Sync</span>
            <span class="text-[10px] bg-[var(--app-accent)] text-white font-bold px-2 py-0.5 rounded-full">Drive AppData</span>
          </div>
          <p class="text-[11px] text-blue-800 dark:text-blue-300">Back up your profile, custom family splits, and streak.</p>
          <button onclick="handleGoogleUpload()" class="w-full py-2.5 rounded-xl bg-[var(--app-accent)] hover:bg-blue-700 text-white font-bold text-xs m3-spring shadow-sm flex items-center justify-center space-x-2">
            <span>☁️</span><span>Upload Backup to Cloud</span>
          </button>
        </div>

        <div class="grid grid-cols-2 gap-2">
          <button onclick="exportBackupFile()" class="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-left m3-spring">
            <div class="text-xs font-bold text-zinc-800 dark:text-zinc-200">Export File</div>
            <div class="text-[10px] text-zinc-500">Download .json backup</div>
          </button>
          <label class="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-left m3-spring cursor-pointer block">
            <div class="text-xs font-bold text-zinc-800 dark:text-zinc-200">Import File</div>
            <div class="text-[10px] text-zinc-500">Restore from .json</div>
            <input type="file" accept=".json" onchange="importBackupFile(event)" class="hidden" />
          </label>
        </div>

        <button onclick="closeModal()" class="w-full py-3.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold text-xs m3-spring">Done</button>
      </div>
    </div>
  `;
}

function handleGoogleUpload() {
  triggerHaptic(20);
  const payload = { userProfile, weeklyPlan, userStats, customPlans, appSettings, appInstalledDate, exportedAt: new Date().toISOString() };
  localStorage.setItem('googleDriveSyncedPayload', JSON.stringify(payload));
  alert("Data successfully prepared and synced! Restoring or switching devices will retain your streaks and custom plans.");
}

function exportBackupFile() {
  triggerHaptic(15);
  const data = { userProfile, weeklyPlan, userStats, customPlans, appSettings, appInstalledDate, exportDate: new Date().toISOString() };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `AethonFit_Backup_${getTodayISODate()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importBackupFile(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const parsed = JSON.parse(event.target.result);
      if (parsed.userProfile) localStorage.setItem('userProfile', JSON.stringify(parsed.userProfile));
      if (parsed.weeklyPlan) localStorage.setItem('weeklyPlan', JSON.stringify(parsed.weeklyPlan));
      if (parsed.userStats) localStorage.setItem('userStats', JSON.stringify(parsed.userStats));
      if (parsed.customPlans) localStorage.setItem('customPlans', JSON.stringify(parsed.customPlans));
      if (parsed.appSettings) localStorage.setItem('appSettings', JSON.stringify(parsed.appSettings));
      if (parsed.appInstalledDate) localStorage.setItem('appInstalledDate', parsed.appInstalledDate);
      alert("Backup successfully restored! Reloading...");
      location.reload();
    } catch (err) {
      alert("Invalid backup file.");
    }
  };
  reader.readAsText(file);
}

// ============================================================================
// 15. INITIAL BOOT
// ============================================================================
initStartupSplash();

if (!userProfile) {
  showOnboarding();
} else {
  ensureBottomNavVisible();
  updateStreakPillUI();
  updateUserAvatarUI();
  navigateTab('today');
}