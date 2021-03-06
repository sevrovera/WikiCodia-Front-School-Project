import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injectable } from "@angular/core";
import { MatCardModule, MatToolbar, MatButtonModule } from "@angular/material";
import {MatIconModule} from '@angular/material/icon';

import {A11yModule} from '@angular/cdk/a11y';
// import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { AboutComponent } from "./about/about.component";
import { AdministratorRoleManagementComponent } from "./administrator-role-management/administrator-role-management.component";
import { ArticleAwaitingValidationComponent } from "./article-awaiting-validation/article-awaiting-validation.component";
import { ArticlePromotedHomeComponent } from "./article-promoted-home/article-promoted-home.component";
import { ArticleSuggestionHomeComponent } from "./article-suggestion-home/article-suggestion-home.component";
import { ArticleConsultationComponent , ArticleConsultationComponentDialog, ArticleConsultationComponentDialogLike} from "./article-consultation/article-consultation.component";
import { CarouselArticleComponent } from "./carousel-article/carousel-article.component";
import { CreateArticleComponent } from "./create-article/create-article.component";
import { ListArticleCreatedComponent } from "./list-article-created/list-article-created.component";
import { ListArticleFavoriteComponent } from "./list-article-favorite/list-article-favorite.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AdvancedSearchComponent } from "./advanced-search/advanced-search.component";
import { QuickSearchComponent } from "./quick-search/quick-search.component";
import { SearchResultComponent } from "./search-result/search-result.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { UserProfilComponent } from "./user-profil/user-profil.component";
import { AppRoutingModule } from "./app-routing.module";
import { AdminCategoryMgmtComponent } from './admin-category-mgmt/admin-category-mgmt.component';
import { AdminTypeMgmtComponent } from './admin-type-mgmt/admin-type-mgmt.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddTypeComponent } from './add-type/add-type.component';
import { HttpClientModule } from '@angular/common/http';
import { AddLanguageComponent } from './add-language/add-language.component';
import { AddFrameworkComponent } from './add-framework/add-framework.component';
import { AdminLanguageMgmtComponent } from './admin-language-mgmt/admin-language-mgmt.component';
import { AdminFrameworkMgmtComponent } from './admin-framework-mgmt/admin-framework-mgmt.component';
import { HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppService } from './app.service';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { ArticleCategoryComponent } from './article-category/article-category.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListArticleAwaitingValidationComponent } from './list-article-awaiting-validation/list-article-awaiting-validation.component';
import { MarkdownPipe } from './markdown.pipe';
import { ArticleConsultationMiniComponent } from './article-consultation-mini/article-consultation-mini.component';
import { ArticleStopPromoComponent } from './article-stop-promo/article-stop-promo.component';
import { CommentArticleComponent } from './comment-article/comment-article.component';

// Imports pour l'interception des erreurs
import { HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ArticleModificationComponent } from './article-modification/article-modification.component';
import { SelectorThemeComponent } from './selector-theme/selector-theme.component';


/**
 * Classe permettant d'afficher un message d'erreur pour l'utilisateur, notamment lorsqu'on a une exception c�t� serveur
 */
@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /*
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    */
    return next.handle(req).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        }else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

          // Suppression de la popup au lancement de l'appli (403 - forbidden)
          if (errorMessage.includes('user: 403 Forbidden')){
            return throwError(errorMessage);
          }
          // Suppression de la popup à l'ouverture de la homepage si pas d'articles promus ou récents 
          if (errorMessage.includes('articlesPromus') || errorMessage.includes('derniersArticlesPromus')
          || (errorMessage.includes('articlesRecents'))) {
            return throwError(errorMessage);
          }
          // Suppression de la popup à l'ouverture de la homepage si pas d'articles suggérés  
          if (errorMessage.includes('articlesSuggeres')){
            return throwError(errorMessage);
          }
          // Suppression de la popup si pas d'articles dans les favoris
          if (errorMessage.includes('articlesFavoris')){
            return throwError(errorMessage);
          }
          // Message spécifique aux erreurs sur la page des articles en attente de validation
          if (errorMessage.includes('articles/reject')){
            errorMessage = "Action impossible! Veuillez d'abord renseigner un commentaire pour justifier le rejet de cet article.";
          }
          // Message spécifique aux erreurs sur la page de modification des articles
          if (errorMessage.includes('articles/modification')){
            errorMessage = "Le contenu de l'article est trop long (10 000 caractères max)!";
          }
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AdministratorRoleManagementComponent,
    ArticleAwaitingValidationComponent,
    ArticlePromotedHomeComponent,
    ArticleSuggestionHomeComponent,
    ArticleConsultationComponent,
    ArticleConsultationComponentDialog,
    ArticleConsultationComponentDialogLike,
    CarouselArticleComponent,
    CreateArticleComponent,
    ListArticleCreatedComponent,
    ListArticleFavoriteComponent,
    ContactUsComponent,
    LoginComponent,
    RegisterComponent,
    AdvancedSearchComponent,
    QuickSearchComponent,
    SearchResultComponent,
    ToolbarComponent,
    UserProfilComponent,
    MatToolbar,
    AdminCategoryMgmtComponent,
    AdminTypeMgmtComponent,
    AddCategoryComponent,
    AddTypeComponent,
    AddLanguageComponent,
    AddFrameworkComponent,
    AdminLanguageMgmtComponent,
    AdminFrameworkMgmtComponent,
    MenuComponent,
    UserSettingsComponent,
    ArticleCategoryComponent,
    HomePageComponent,
    ListArticleAwaitingValidationComponent,
    MarkdownPipe,
    ArticleConsultationMiniComponent,
    ArticleStopPromoComponent,
    CommentArticleComponent,
    ConfirmationDialogComponent,
    ArticleModificationComponent,
    SelectorThemeComponent
  ],

  imports: [
    BrowserModule, 
    AppRoutingModule, 
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    BrowserAnimationsModule,
    A11yModule,
    MatFormFieldModule,    
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    // MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
  ],
  providers: [AppService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }
  ],
  entryComponents: [ArticleConsultationComponentDialog, ConfirmationDialogComponent, ArticleConsultationComponentDialogLike],
  bootstrap: [AppComponent],
})

export class AppModule {}
