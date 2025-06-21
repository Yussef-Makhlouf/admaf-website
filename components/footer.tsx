import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-admaf-charcoal text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-admaf-burgundy flex items-center justify-center">
                <span className="text-white text-sm font-bold">أ</span>
              </div>
              <span className="text-xl font-bold">ADMAF</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              مركز أبو ظبي للفنون والثقافة - منارة للإبداع والفنون في المنطقة العربية، ومركز للتبادل الثقافي والفني بين
              مختلف الثقافات والحضارات.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-admaf-burgundy">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-admaf-burgundy">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-admaf-burgundy">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-admaf-burgundy">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">روابط سريعة</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  نبذة عنا
                </Link>
              </li>
              <li>
                <Link href="/activities" className="text-gray-300 hover:text-white transition-colors">
                  الأنشطة
                </Link>
              </li>
              <li>
                <Link href="/festival" className="text-gray-300 hover:text-white transition-colors">
                  مهرجان أبوظبي
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-gray-300 hover:text-white transition-colors">
                  المنشورات
                </Link>
              </li>
              <li>
                <Link href="/educational-programs" className="text-gray-300 hover:text-white transition-colors">
                  البرامج التعليمية
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">البرامج</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/educational-programs/initiatives"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  المبادرات
                </Link>
              </li>
              <li>
                <Link href="/educational-programs/awards" className="text-gray-300 hover:text-white transition-colors">
                  الجوائز
                </Link>
              </li>
              <li>
                <Link href="/educational-programs/grants" className="text-gray-300 hover:text-white transition-colors">
                  المنح والدعم
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="text-gray-300 hover:text-white transition-colors">
                  الشراكات
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">تواصل معنا</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-admaf-burgundy mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">أبوظبي، دولة الإمارات العربية المتحدة</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-admaf-burgundy flex-shrink-0" />
                <span className="text-gray-300">+971 2 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-admaf-burgundy flex-shrink-0" />
                <span className="text-gray-300">info@admaf.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} مركز أبو ظبي للفنون والثقافة. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                سياسة الخصوصية
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
