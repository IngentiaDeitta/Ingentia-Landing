'use server'

import { supabaseAdmin } from '@/lib/supabase'

export async function submitLead(formData: FormData) {
    const fullName = formData.get('fullName') as string
    const email = formData.get('email') as string
    const companyRole = formData.get('companyRole') as string
    const bottleneck = formData.get('bottleneck') as string

    if (!fullName || !email) {
        return { error: 'Nombre y correo son obligatorios' }
    }

    const { data, error } = await supabaseAdmin
        .from('leads')
        .insert([
            {
                full_name: fullName,
                email,
                company_role: companyRole,
                bottleneck
            }
        ])
        .select()

    if (error) {
        console.error('Supabase Error:', error)
        return { error: 'Error al enviar el formulario. Por favor intenta de nuevo.' }
    }

    return { success: true, data }
}
